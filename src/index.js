import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './screen/app/App';
<<<<<<< HEAD
import Login from './screen/login';
=======
import Cadastro from './screen/cadastro';
>>>>>>> cadastro
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <Switch>
<<<<<<< HEAD
    <Route path="/login" exact={true} component={Login} />
    <Route path="/" exact={true} component={App} />
=======
        <Route path="/" exact={true} component={App} />
        <Route path="/cadastro" exact={true} component={Cadastro} />
>>>>>>> cadastro
    </Switch>
</ BrowserRouter>,  document.getElementById('root'));
registerServiceWorker();
