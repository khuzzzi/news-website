import { createContext } from "react";

export const ContextCreation = createContext()

export const ContextProvider = ({children})=>{
    return(
        <ContextCreation.Provider value={"thapa technical"}>
            {children}
        </ContextCreation.Provider>
    )
}
