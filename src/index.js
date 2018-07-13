import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './screen/app/App';
import Login from './screen/login';
<<<<<<< HEAD
import Cadastro from './screen/cadastro';
import Perfil from './screen/perfil';
=======
import Ong from './screen/ong';
>>>>>>> telaong
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <Switch>
<<<<<<< HEAD
=======
    <Route path="/login" exact={true} component={Login} />
    <Route path="/ong" exact={true} component={Ong} />
>>>>>>> telaong
    <Route path="/" exact={true} component={App} />
    <Route path="/cadastro" exact={true} component={Cadastro} />
    <Route path="/login" exact={true} component={Login} />
    <Route path="/perfil" exact={true} component={Perfil} />
    </Switch>
</ BrowserRouter>,  document.getElementById('root'));
registerServiceWorker();
