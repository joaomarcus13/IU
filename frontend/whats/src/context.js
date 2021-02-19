import React, { useState, createContext } from "react";



const Context = createContext('')

export const NameProvider = ({children}) =>{

    const [idChat,setidChat] = useState('')

    return(
    <Context.Provider value={[idChat,setidChat]}>
        {children}
    </Context.Provider>)
}

export default Context


