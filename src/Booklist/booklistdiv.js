// import { Container } from "react-bootstrap";
import BookComponent from "./Bookcomponent";

import "../App.scss";
import Filteroptions from "./Filteroptions";
import { useState} from 'react';
import { AnimatePresence } from "framer-motion";
import { useEffect } from 'react';
import { useBook } from "../BookContext";


function Booklistdiv(props){

    const [draftorbook,setdraftorbook]=useState('allbooks'); //state to show drafts or books
    let unfilteredbooks = (useBook())[draftorbook]; // getting whatever we said to the 'draftorbook' state
    let dark=(useBook()).darkmode;

    const [filteredBooks,setfilteredBooks]=useState(unfilteredbooks); //initially
    const [bookname,setBookname]=useState(''); //setting default values for the filter option div
    const [authorname,setauthorname]=useState('');
    const [tags,settags]=useState('');
    const [filteroptiondiv,setfilteredoptiondiv]=useState(false); //showing the filter option div?

    const togglenewbookadding=()=>props.togglenewbookadding('edit');

//if new book being added dont show the filter div
    useEffect(()=>{ props.newbookadding && setfilteredoptiondiv(false)},[props.newbookadding])


    const finalfiltered=(unfilteredbooks)=>{  //actually filtering
        let x=unfilteredbooks;

        if (x)
        {
             x=x.filter((e)=>
            {
                let re = new RegExp(bookname, 'i');
                let re2=new RegExp(authorname, 'i');
                const areEqual = tags?tags.every(obj =>  Object.keys(e.tags).length && e.tags.some(otherObj => JSON.stringify(obj) === JSON.stringify(otherObj))):true;

                return (bookname?(e.bookname).match(re):true) && (authorname?(e.authors).match(re2):true) && areEqual;

            });

            setfilteredBooks(x);
        }
    }

    const refreshfilter=()=>{ //refresh the filter i.e show all books once again
        setauthorname('');
        setfilteredBooks(unfilteredbooks);
        setauthorname('');
        settags('');
    }

useEffect(()=>finalfiltered(unfilteredbooks),[tags,authorname,bookname,unfilteredbooks]); //whenever the options in filter option div changes re render the list


    return (
                <div>
                    <div  style={{borderBottom:`3px solid  ${dark?'white':'grey'}`}} >
                    <div className="container-fluid justify-content-between align-items-baseline px-2 optionsdiv background-white">
                        <div className='d-flex align-items-baseline'>
                            <div className={`px-2  ${draftorbook==='allbooks'? "h1 txt-dark" : "h3 txt-muted mx-2"}`} onClick={()=>{setdraftorbook('allbooks')}} style={{cursor:'pointer'}}>Books</div>
                            <div className={`px-2  ${draftorbook==='alldrafts'? "h1 txt-dark" : "h3 txt-muted mx-2"}`} onClick={()=>{setdraftorbook('alldrafts')}} style={{cursor:'pointer'}}>Drafts</div>
                        </div>

                        <div style={{display:'inline'}} >
                            <div className='btn btn-sec py-0 m-1' style={{fontSize:20}} onClick={()=> {!props.newbookadding && setfilteredoptiondiv(!filteroptiondiv)}}>Tools</div>
                            <button className="btn btn-sec py-0 " style={{fontSize:20}} onClick={refreshfilter}>&#8635;</button>
                        </div>
                    </div>
                    </div>

                    <AnimatePresence>{filteroptiondiv && <Filteroptions {...{settags,setBookname,setauthorname}} />}</AnimatePresence>

                    <div className='row m-0 align-items-baseline background-light' style={{justifyContent:'flex-start', padding:'0px 1px'}}>
                        {filteredBooks.length>0 ? filteredBooks.map((e)=><BookComponent data={e} key={e.id} togglenewbookadding={togglenewbookadding}/>): <div className="container"><h3 className="txt-dark m-3" style={{  fontStyle: "italic"}}>"A bare bookshelf is not a sign of a lack of knowledge, but rather an invitation to explore new worlds and fill it with the stories that move you."</h3></div>}
                    </div>

                </div>

    );
}

export default Booklistdiv;