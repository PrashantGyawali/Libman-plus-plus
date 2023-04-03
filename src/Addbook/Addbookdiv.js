// import  Button from 'react-bootstrap/Button';
import { useState, useRef} from 'react';
import  {motion}  from "framer-motion";
import Form from 'react-bootstrap/Form';
import Selecttags from './selecttags';
import Authorinputbtn from './authorinput';
import Booknameinput from './booknameinput';
import ImageSelect from './imageselect';
import  Button  from 'react-bootstrap/Button';
import  Container  from 'react-bootstrap/Container';
import '../App.scss'
import { useBook } from "../BookContext";
import { useEffect } from 'react';


 const Addbookdiv=(props)=>
{

    const { allbooks: books, setallbooks: setbooks, alldrafts: drafts, setalldrafts: setdrafts, currentid, setcurrentid, defaultvalue: defaultvalues } = useBook();

    // const books = (useBook()).allbooks;
    // const setbooks = (useBook()).setallbooks;
    // const drafts = (useBook()).alldrafts;
    // const setdrafts = (useBook()).setalldrafts;
    // const currentid = (useBook()).currentid;
    // const setcurrentid = (useBook()).setcurrentid;
    // const defaultvalues=(useBook()).defaultvalue;

    let t_bookname=useBook()?.defaultvalue?.bookname || '';
    let t_url=useBook()?.defaultvalue?.url || '';
    let t_authors=useBook()?.defaultvalue?.authors || '';
    let t_published=useBook()?.defaultvalue?.published || 2023;
    let t_desc=useBook()?.defaultvalue?.description || '';







    const [Coverlink,setCoverlink]=useState(t_url);
    let formdata = useRef({bookname: t_bookname, authors: t_authors, tags:'', description:t_desc, url: t_url, published: t_published, updated:'' })

    function updateformfunc(e){
        let m =e.target.name;
        formdata.current[`${m}`]= e.target.value;
        console.log(formdata);
    }

    function updatetags(o)
    {
        formdata.current[`tags`]= o;
        console.log(formdata);
    }

const dateonchange=(e)=>{
        if(Number(e.target.value)>Number(e.target.max) || Number(e.target.value)<Number(e.target.min))
         {
            e.target.value=2023
        }
        else{ updateformfunc(e) }; 
    }
    

const divanimation={
        key:'addbookbtn',
        initial:{y: "100%", opacity: 0, scaleY:0},
        animate:{y: 0, opacity: 1, scaleY: 1},
        transition:{duration:0.3, ease: "easeOut"},
        exit:{y: "100%", opacity: 0, scaleY:0, transition:{duration:0.3}}
        }

const submitfn=(e)=>{
    e.preventDefault();
    console.log('hihu submitted', books);
    console.log(defaultvalues.id)
    if(defaultvalues.id){
        let temp=[...books];
        if (temp){
            let temp2=temp.filter((e)=>Number(e.id)!==Number(defaultvalues.id))
            let up=(((new Date().toLocaleString("sv-SE")).slice(0,19)).replaceAll('-','/'));
            temp2.unshift({...formdata.current, 'id':defaultvalues.id, 'updated' : up });
            setbooks(temp2);
        }
    }
    else{
        let temp=[...books];
        let tempid=currentid;
        let up=(((new Date().toLocaleString("sv-SE")).slice(0,19)).replaceAll('-','/'));
        temp.unshift({...formdata.current, 'id':tempid, 'updated' : up });
        setcurrentid(currentid+1);
        setbooks(temp);
    }
    props.togglenewbookadding()
}


const cancel=()=>
{props.togglenewbookadding()};

const deletebook=()=>{
    let booktemp=[...books];
    let drafttemp=[...drafts];
    console.log(defaultvalues.id);
    let t= booktemp.findIndex((e)=>Number(e.id)===Number(defaultvalues.id));
    console.log(t,booktemp,drafttemp)
    if(t!==(-1)) 
        {   console.log('found in books')
            booktemp.splice(t,1);
            setbooks(booktemp);
            // localStorage.drafts=JSON.stringify(booktemp);
        }
    else{
        console.log('found in drafts')
        t= drafttemp.findIndex((e)=>Number(e.id)===Number(defaultvalues.id));
        drafttemp.splice(t,1);
        setdrafts(drafttemp);
        localStorage.drafts=JSON.stringify(drafttemp);
    }

    props.togglenewbookadding();
}

const close=()=>{
    if(formdata.current.bookname)
        {
            let up=(((new Date().toLocaleString("sv-SE")).slice(0,19)).replaceAll('-','/'));
            let temp=[...drafts];
            let tempid=currentid;
            let test=(temp.findIndex((e)=>Number(e.id)===Number(defaultvalues.id)));
            if(Number(test)!==Number(-1))
            {
                temp.splice(test,1);
                temp.unshift({...formdata.current, 'id':defaultvalues.id, 'updated' : up });
                setdrafts(temp);
                localStorage.drafts=JSON.stringify(temp);
                localStorage.currentid=tempid;
            }
            else{
                temp.unshift({...formdata.current, 'id':tempid, 'updated' : up });
                tempid++;
                setcurrentid(tempid);
                setdrafts(temp);
                localStorage.drafts=JSON.stringify(temp);
                localStorage.currentid=tempid;
            }
        }
    props.togglenewbookadding();
}




return (

<motion.div {...divanimation}>
    <Form onSubmit={(e)=>{submitfn(e)}} >
    <div className='container px-0 p-0  bg-light  justify-self-center addbookdivscale'>

        <div className="row justify-content-center ">

            <ImageSelect setCoverlink={setCoverlink} updateformfunc={updateformfunc} Coverlink={Coverlink}/>


            <div className="col-lg-7 col-md-9 col-12 p-0 d-flex flex-column" style={{border:"3px solid black", borderRadius: "0px 15px 15px 0px "}}>
                <div>
                <div className="container text-center h2">
                    Book Info
                    <Button className='d-inline float-end mt-1' onClick={close}>X</Button>    
                </div>

                <Booknameinput updateformfn={updateformfunc}/>

                <Authorinputbtn updateformfn={updateformfunc}/>

                <Container> 
                    <Selecttags updatefn={updatetags}/>
                </Container>

                <Container>
                <div className='col-12 mb-1 ms-1 ' style={{ textAlign: 'left'}}>Date published:</div>
                <input type="number" required className='w-100 form-control' name="published" id="" defaultValue={t_published} min='0' max='2023' onChange={(e)=>{dateonchange(e)}} style={{ textAlign: 'left', fontSize:19}} />
                </Container>
                
                
                <Container >
                    <div className='col-12 mb-1 ms-1' style={{ textAlign: 'left'}}>Description:</div>
                    <Form.Control as="textarea" name='description' rows={6} onChange={(e)=>updateformfunc(e)} style={{ textAlign: 'left', resize: 'none'}} defaultValue={t_desc} required/>
                </Container>
            
                </div>

            <div className='container h-100' style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div>
                    {defaultvalues && <button className='btn btn-dark' style={{fontSize:25, margin:7}} onClick={deletebook}>Delete</button>}
                    <Button variant="danger"  style={{fontSize:25, margin:7}} onClick={cancel}>Cancel</Button>
                    <button className="btn btn-success" type='submit' style={{fontSize:25, margin:7}} >Add Book</button>
                </div>
                
            </div>



            </div>
        </div>
        </div>
        
        </Form>
</motion.div>

);

}

export default Addbookdiv;