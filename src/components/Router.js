import React from 'react'
import { BrowserRouter, Switch, Route} from "react-router-dom";
import App from '../App';
import Recipe from "./Recipe";
function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path = "/" component = {App} exact/>
                    <Route path = "/recipe/:id" component = {Recipe}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router
