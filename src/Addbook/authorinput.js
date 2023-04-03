import  Form  from "react-bootstrap/Form";
import  Container  from 'react-bootstrap/Container';
import { useBook } from "../BookContext";

const Authorinputbtn=(props)=>
{
    let t=useBook()?.defaultvalue?.authors;

    return(<Container>
            <div className='text-right col-12 mb-1 ms-1 mt-1' style={{ textAlign: 'left'}}>Authors:</div>
            <Form.Control onChange={(e)=>props.updateformfn(e)} type="text" name='authors' placeholder="Author name" style={{fontSize:20,textAlign:'left'}} defaultValue={ t && t} required/>
        </Container>);
}

export default Authorinputbtn;