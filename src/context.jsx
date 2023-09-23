import React,{useState,useContext} from 'react'
const AppContext = React.createContext()
function AppProvider({children}) {
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () =>{
    return(
        useContext(AppContext)
    )
}

export default AppProvider
