import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const inititalState = {
    user: {}
}

export const GlobalContext = createContext(inititalState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, inititalState);

    return (<GlobalContext.Provider value={{
        user: state.user
    }}>
        {children}
    </GlobalContext.Provider>);
}