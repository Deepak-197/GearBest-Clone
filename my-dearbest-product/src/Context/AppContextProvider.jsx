import React  from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { reducer } from "../Login/reducer";
import { store } from "../Login/store";


export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, store)


    return (
        <AppContextProvider value={{state, dispatch}}>
            {children}
        </AppContextProvider>
    )

}