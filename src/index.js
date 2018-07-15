import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './screen/app/App';
import Vitrine from './screen/vitrine';
import Login from './screen/login';
import Cadastro from './screen/cadastro';
import Perfil from './screen/perfil';
import Ong from './screen/ong';
import CriarGrupo from './screen/criarGrupo';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route path="/vitrine"  exact={false} component={Vitrine} />
        <Route path="/" exact={true} component={App} />
        <Route path="/cadastro" exact={true} component={Cadastro} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/perfil" exact={true} component={Perfil} />
        <Route path="/criarGrupo" exact={true} component={CriarGrupo} />
        <Route path="/ong" exact={true} component={Ong} />
    </Switch>
</ BrowserRouter>,  document.getElementById('root'));
registerServiceWorker();
