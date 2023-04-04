import  Form  from "react-bootstrap/Form";
import  Container  from 'react-bootstrap/Container';
import { useBook } from "../BookContext";
import { useEffect } from "react";
import '../App.scss'

const Booknameinput=(props)=>
{
        let t=useBook()?.defaultvalue?.bookname || '';

    return(
        <Container>
                <div className='text-right col-12 mb-1 ms-1 txt-dark' style={{ textAlign: 'left'}}>Book Name:</div>

                <Form.Control  onChange={(e)=>props.updateformfn(e)} id='booknameinput' type="text" name='bookname' placeholder="Bookname" className='form-control-lg background-white txt-dark' style={{fontSize:25, textAlign:'left'}} defaultValue={t&&t}  required/>

        </Container>);
}

export default Booknameinput;