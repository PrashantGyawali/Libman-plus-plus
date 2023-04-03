import './App.scss';
import  Addbookbtn  from './Addbookbtn.js';
import  Addbookdiv  from './Addbook/Addbookdiv.js';
import { AnimatePresence } from "framer-motion"
import {useState } from 'react';

import Booklistdiv from './Booklist/booklistdiv';
import { useBook } from "./BookContext";

function App() {

  const [newbookadding,togglenewbookadding]=useState(false);
  const resetdefaultvalues=(useBook()).setdefaultvalue

  const toggle=function()
  {
    function toggleandreset(){
      togglenewbookadding(false);
      resetdefaultvalues('');
    }
    newbookadding?toggleandreset():togglenewbookadding('new');
    console.log(newbookadding);
  };



  return (
    <>
    <div className='container-fluid p-3  text-center justify-content-center' >
  
      <div className='container-fluid bg-light text-center fixed-top' >
      <div className="h1">Libman++</div>
      </div> 
      <br/>
      <br/>

    
    <Addbookbtn togglefn={()=>{toggle(newbookadding)}} open={newbookadding}/>


    <AnimatePresence>{ newbookadding && <Addbookdiv togglenewbookadding={toggle} newbookadding={newbookadding}/>}</AnimatePresence>



      </div>
      
     <Booklistdiv newbookadding={newbookadding} togglenewbookadding={togglenewbookadding}/>

    </>
  );
}

export default App;
