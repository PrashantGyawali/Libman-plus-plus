// import logo from './logo.svg';
import './App.scss';
import  Addbookbtn  from './Addbookbtn.js';
import  Addbookdiv  from './Addbook/Addbookdiv.js';
// import  Button from 'react-bootstrap/Button';
import { motion, AnimatePresence } from "framer-motion"
import {useState } from 'react';

import Booklistdiv from './Booklist/booklistdiv';

function App() {

  const [newbookadding,togglenewbookadding]=useState(false);

  const toggle=function()
  {
  newbookadding?togglenewbookadding(false):togglenewbookadding('new');
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


    <AnimatePresence>{ newbookadding && <Addbookdiv togglenewbookadding={toggle}/>}</AnimatePresence>



      </div>

     <Booklistdiv/>
    </>
  );
}

export default App;
