import { createContext,useContext,useState } from "react"
import data from './testdata.json'

const BookContext =createContext();

export const BookProvider=({children})=>{
    const [allbooks,setallbooks]= useState(data);
    let t=[...data];//testin purposes only, will implement local storage soon
    t.pop();
    const [alldrafts,setalldrafts]= useState(t);

    return (
    <BookContext.Provider value={{allbooks,setallbooks,alldrafts,setalldrafts}}>
        {children}
    </BookContext.Provider>);
}

export const useBook=()=>useContext(BookContext);