import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Nav = (props) => {
    const { history, location, match } = props;

    console.log('location',location);
    console.log('match',match);
    return (

        <React.Fragment>
            <button
            onClick={()=>history.push('/settings', {test:123})}
            >go to settings</button>
            <button
            onClick={()=>history.goBack()}
            >go back</button>
            <button
            onClick={()=>history.goForward()}
            >go Forward</button>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
                <li>
                    <Link to="/reports">Reports</Link>
                </li>
                <li>
                    <Link to="/reports/123">Reports ID</Link>
                </li>            </ul>

        </React.Fragment>

    );
}

export default withRouter(Nav);