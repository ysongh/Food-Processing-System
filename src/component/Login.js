import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import TextInputField from './common/TextInputField';

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = () => {
        const userData = { name, password };
        console.log(userData);
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