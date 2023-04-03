import { createContext,useContext,useState } from "react"
// import data from './testdata.json'  For test bok data

const BookContext =createContext();

export const BookProvider=({children})=>{

   // const [allbooks,setallbooks]= useState(data); ---> For test books data


    let tempid=localStorage.currentid?Number(localStorage.currentid):1;
    let draftsfromlocalstorage = localStorage.drafts ? JSON.parse(localStorage.drafts) : [];
    let booksfromlocalstorage = localStorage.books ? JSON.parse(localStorage.books) : [];

    const [alldrafts,setalldrafts]= useState(draftsfromlocalstorage);
    const [allbooks,setallbooks]= useState(booksfromlocalstorage);

    const [currentid,setcurrentid]=useState(tempid);
    const [defaultvalue,setdefaultvalue]=useState(''); //for editing books



    return (
    <BookContext.Provider value={{allbooks,setallbooks,alldrafts,setalldrafts,currentid,setcurrentid,defaultvalue,setdefaultvalue}}>
        {children}
    </BookContext.Provider>);
}

export const useBook=()=>useContext(BookContext);