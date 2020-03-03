import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'; 
import Dashboard from './Components/dashboard';
import Settings from './Components/settings';
import Reports from './Components/reports';

const App = () =>(
    <BrowserRouter>
        <React.Fragment>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/reports" component={Reports}/>
        </React.Fragment>
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
