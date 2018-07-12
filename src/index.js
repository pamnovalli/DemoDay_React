import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './screen/app/App';
import Vitrine from './screen/vitrine';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/vitrine" exact={true} component={Vitrine} />
    </Switch>
</ BrowserRouter>,  document.getElementById('root'));
registerServiceWorker();
