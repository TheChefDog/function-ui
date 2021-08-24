import './App.css';
import {HashRouter} from "react-router-dom";
import React from 'react';
import NavigationMenu from "./components/NavigationMenu";
import {Switch, Route} from 'react-router-dom';
import Captcha from "./components/Captcha";
import {MainConfigStore} from "./stores/MainConfigStore";
import ProxyGroups from "./components/ProxyGroups";

export const mainConfig = new MainConfigStore();

function App() {
    return (
        <HashRouter>
            <NavigationMenu />
            <Switch>
                <Route path="/captcha" component={Captcha} />
                <Route path="/proxies" component={ProxyGroups} />
                <Route exact path="/" />
            </Switch>
        </HashRouter>
    );
}

export default App;
