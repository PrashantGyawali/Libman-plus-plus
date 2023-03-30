import  Form  from "react-bootstrap/Form";
import Container from "../Container";

const Booknameinput=(props)=>
{
    return(
        <Container>
                <div className='text-right col-12 mb-1 ms-1' style={{ textAlign: 'left'}}>Book Name:</div>

                <Form.Control onChange={(e)=>props.updateformfn(e)} type="text" name='bookname' placeholder="Bookname" className='form-control-lg' style={{fontSize:25, textAlign:'left'}} defaultValue='hmm'  required/>

        </Container>);
}

export default Booknameinput;