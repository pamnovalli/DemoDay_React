import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './screen/app/App';
import CriarGrupo from './screen/criarGrupo';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/criarGrupo" exact={true} component={CriarGrupo} />
    </Switch>
</ BrowserRouter>,  document.getElementById('root'));
registerServiceWorker();
