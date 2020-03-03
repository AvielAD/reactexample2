import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 

import Dashboard from './Components/dashboard';
import Settings from './Components/settings';
import Reports from './Components/reports';
import Reportsid from './Components/reportsid';

const App = () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/settings" component={Settings}/>
            <Route exact path="/reports" component={Reports}/>
            <Route path="/reports/:id" component={Reportsid}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
