import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App';
import Home from './modules/Home';
import About from './modules/About';
import Repos from './modules/Repos';
import Repo from './modules/Repo';
import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="repos" component={Repos}>
                <Route path={":userName/:repoName"} component={Repo}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById('root')
);
