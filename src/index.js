import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './screen/app/App';
import Login from './screen/login';
import Perfil from './screen/perfil';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <Switch>
    <Route path="/" exact={true} component={App} />
    <Route path="/login" exact={true} component={Login} />
    <Route path="/perfil" exact={true} component={Perfil} />
    </Switch>
</ BrowserRouter>,  document.getElementById('root'));
registerServiceWorker();
