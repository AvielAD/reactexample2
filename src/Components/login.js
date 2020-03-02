import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './login.css';

function Componente(props){

    const {
        email,
        password,
        onChangeCampo,
        onLogin,
    } = props;

    return(
        <React.Fragment>
            <div className="margin1">
                
                <TextField
                    label="Email"
                    fullWidth
                    value = {email}
                    onChange={e=>  onChangeCampo('email', e.target.value)}
                />

                <TextField
                    label="Password"
                    fullWidth
                    value = {password}
                    onChange={e=>  onChangeCampo('password', e.target.value)}
                />

                <Button 
                    variant="contained"
                    color="primary"
                    fullwidth
                    onClick = {onLogin}
                >Login</Button>

            </div>
        </React.Fragment>
    );
}

export default Componente;