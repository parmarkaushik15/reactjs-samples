import { API_ROOT_PATH } from '../constants';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, LOAD_TODOS } from './actionTypes'
import fetch from 'isomorphic-fetch';
import axios from 'axios';

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function fetchTodos() {
   return dispatch => {
   
     axios.get(API_ROOT_PATH+'/todos')
      .then(response => 
          dispatch({
          type: LOAD_TODOS,
          payload: {
            todos: response.data._embedded.todos
          }
        })
      )
      .catch((err)=>{
            console.error('Fetch todos ERROR:',err)
      })
      ;
  }
}

export function saveTodo(text) {
  return dispatch => {
      
      var config = {
        headers: {'Content-Type': 'application/json'}
      };
      axios({
        url: API_ROOT_PATH+'/todos',
        method: 'post',
        data: {text: text, completed: false}
      }, config)
			.then(function(response) {
        console.log('Saved todo :',response);
        dispatch(fetchTodos());       
			})
			.catch(function(response){
				console.error('Save todo ERROR:',response);
			})
  }
}