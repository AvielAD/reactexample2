import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../Components/login.css';


function Main(props){
    const {children} = props;

    return(
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <Typography
                        variant = 'h6'
                        color = 'inherit'
                    >
                        Bienvenido
                    </Typography>
                </Toolbar>
            </AppBar>

            <div className="login.css">
                {children}
            </div>

        </React.Fragment>
    );
}

export default Main;
