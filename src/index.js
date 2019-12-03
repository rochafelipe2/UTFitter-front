import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Explorar from './pages/Explorar';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Seguidores from './pages/Seguidores';
import Seguindo from './pages/Seguindo';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/usuarios" component={App} />
            <Route path="/explorar" component={Explorar} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/home" component={Home} />
            <Route path="/seguidores" component={Seguidores} />
            <Route path="/seguindo" component={Seguindo} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
//registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
