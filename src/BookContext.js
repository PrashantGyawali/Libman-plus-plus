import { createContext,useContext,useState } from "react"
import data from './testdata.json'

const BookContext =createContext();

export const BookProvider=({children})=>{
    const [allbooks,setallbooks]= useState(data);
    // let t=[...data];//testin purposes only, will implement local storage soon
    // t.pop();


    let tempid=localStorage.currentid?Number(localStorage.currentid):1;
    let t = localStorage.drafts ? JSON.parse(localStorage.drafts) : [];
    const [alldrafts,setalldrafts]= useState(t);
    const [currentid,setcurrentid]=useState(tempid);


    return (
    <BookContext.Provider value={{allbooks,setallbooks,alldrafts,setalldrafts,currentid,setcurrentid}}>
        {children}
    </BookContext.Provider>);
}

export const useBook=()=>useContext(BookContext);