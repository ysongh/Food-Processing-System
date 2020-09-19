import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

import axios from '../axios';
import { GlobalContext } from '../context/GlobalState';
import TextInputField from './common/TextInputField';

const Login = () => {
    const { loginUser } = useContext(GlobalContext);
    const history = useHistory();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async () => {
        try{
            const userData = { name, password };

            const { data } = await axios.put('/user/login', userData);
            
            loginUser(data.data);
            history.push('/home');
        } catch(err){
            console.error(err);
        }
    } 

    return(
        <div className="mt-5">
            <h1>Login</h1>
            <TextInputField
                label="Name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextInputField
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br />
            <br />

            <Button variant="contained" color="primary" onClick={() => onSubmit()}>
                Login
            </Button>
        </div>
    )
}

export default Login;