import  Form  from "react-bootstrap/Form";
import  Container  from 'react-bootstrap/Container';
import { useBook } from "../BookContext";

const Booknameinput=(props)=>
{
        let t=useBook()?.defaultvalue?.bookname || '';

    return(
        <Container>
                <div className='text-right col-12 mb-1 ms-1' style={{ textAlign: 'left'}}>Book Name:</div>

                <Form.Control onChange={(e)=>props.updateformfn(e)} type="text" name='bookname' placeholder="Bookname" className='form-control-lg' style={{fontSize:25, textAlign:'left'}} defaultValue={t&&t}  required/>

        </Container>);
}

export default Booknameinput;