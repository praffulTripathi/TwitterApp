import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => { // Take any children component as an input
    const state = {
        isDarkMode: true
    }
    return(
    <ThemeContext.Provider value={state}>
        {children}
    </ThemeContext.Provider>
    // Wrap the provider with a Provider, and return
    )
}