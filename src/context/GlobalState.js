import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const inititalState = {
    user: {},
    gln: '',
    gtin: ''
}

export const GlobalContext = createContext(inititalState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, inititalState);

    function loginUser(data){
        dispatch({
            type: "LOGIN_USER",
            payload: data
        })
    }

    function addGLN(data){
        dispatch({
            type: "ADD_GLN",
            payload: data
        })
    }

    function addGTIN(data){
        dispatch({
            type: "ADD_GTIN",
            payload: data
        })
    }

    return (<GlobalContext.Provider value={{
        user: state.user,
        user_gln: state.gln,
        user_gtin: state.gtin,
        loginUser,
        addGLN,
        addGTIN
    }}>
        {children}
    </GlobalContext.Provider>);
}