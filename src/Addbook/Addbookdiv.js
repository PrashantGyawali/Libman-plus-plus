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



 const Addbookdiv=(props)=>
{

    // const defaultvalues=useRef(props.defaultvalues);
    const [Coverlink,setCoverlink]=useState('http://cdn.onlinewebfonts.com/svg/img_27177.png')

    let formdata = useRef({bookname:'',authors: '', tags:'', description:'', url:'' })

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


const divanimation={
        key:'addbookbtn',
        initial:{y: "100%", opacity: 0, scaleY:0},
        animate:{y: 0, opacity: 1, scaleY: 1},
        transition:{duration:0.3, ease: "easeOut"},
        exit:{y: "100%", opacity: 0, scaleY:0, transition:{duration:0.3}}
        }

const submitfn=(e)=>{
    e.preventDefault();
    }

const cancel=()=>
{props.togglenewbookadding()};

const close=()=>{
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
                <input type="number" className='w-100 form-control' name="dateofpublish" id="" defaultValue={2023} min='0' max='2023' onChange={(e)=>{if(Number(e.target.value)>Number(e.target.max) || Number(e.target.value)<Number(e.target.min)) {e.target.value=2023}; }} style={{ textAlign: 'left', fontSize:19}} />
                </Container>
                
                
                <Container >
                    <div className='col-12 mb-1 ms-1' style={{ textAlign: 'left'}}>Description:</div>
                    <Form.Control as="textarea" name='description' rows={6} onChange={(e)=>updateformfunc(e)} style={{ textAlign: 'left', resize: 'none'}} required/>
                </Container>
            
                </div>

            <div className='container h-100' style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div>
                <Button variant="success"  style={{fontSize:25, margin:7}}>Add Book</Button>
                <Button variant="danger"  style={{fontSize:25, margin:7}} onClick={cancel}>Cancel</Button>
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