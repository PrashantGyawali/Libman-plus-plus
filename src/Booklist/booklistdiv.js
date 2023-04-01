// import { Container } from "react-bootstrap";
import BookComponent from "./Bookcomponent";
import data from '../testdata.json'
import "../App.scss";
import Filteroptions from "./Filteroptions";
import { useState } from 'react';
import { AnimatePresence } from "framer-motion";
import { motion } from 'framer-motion';


function Booklistdiv(){
    
    let unfilteredbooks= data;

    const [filteredBooks,setfilteredBooks]=useState(unfilteredbooks);
    const [bookname,setBookname]=useState('');
    const [authorname,setauthorname]=useState('');
    const [tags,settags]=useState('');
    const [filteroptiondiv,setfilteredoptiondiv]=useState(false);

    console.log(tags);

    const finalfiltered=(unfilteredbooks)=>{
        let x=unfilteredbooks;
        x=x.filter((e)=>
        {
            let re = new RegExp(bookname, 'i');
            let re2=new RegExp(authorname, 'i');
            const areEqual = tags?tags.every(obj => (e.tags).some(otherObj => JSON.stringify(obj) === JSON.stringify(otherObj))):true;

           return (bookname?(e.bookname).match(re):true) && (authorname?(e.authors).match(re2):true) && areEqual;

        });
// console.log(x);
    }



    finalfiltered(unfilteredbooks);


    return (
<motion.div layout transition={{ duration: 0.5 }}>
        <div>

            <div className="container d-flex justify-content-between align-items-baseline" style={{borderBottom:'3px solid grey'}}>
                 <div className='h1 px-2 m-0 '>Books</div>
                 <div className='btn btn-secondary py-0' style={{fontSize:20}} onClick={()=>setfilteredoptiondiv(!filteroptiondiv)}>Tools</div>
            </div>

            <AnimatePresence>{filteroptiondiv && <Filteroptions {...{settags,setBookname,setauthorname}} />}</AnimatePresence>

            <div className='row m-0' style={{justifyContent:'flex-start', padding:'0px 1px'}}>
                {filteredBooks && filteredBooks.map((e)=><BookComponent data={e} key={e.id}/>)}
            </div>

        </div>

        </motion.div>
    );
}

export default Booklistdiv;