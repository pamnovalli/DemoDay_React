import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './screen/app/App';
import Login from './screen/login';
import Ong from './screen/ong';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <Switch>
    <Route path="/login" exact={true} component={Login} />
    <Route path="/ong" exact={true} component={Ong} />
    <Route path="/" exact={true} component={App} />
    </Switch>
</ BrowserRouter>,  document.getElementById('root'));
registerServiceWorker();
