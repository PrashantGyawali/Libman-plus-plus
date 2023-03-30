import  Button from 'react-bootstrap/Button';
import  {motion}  from "framer-motion";

 const Addbookbtn=(props)=>
{

    const openvalue=props.open;
    const toggle=()=>{props.togglefn()};
    const Text=(e)=>{
        if(!e.open)
        {return (<><span style={{fontSize:27, fontWeight:900}}>+   </span> Add book</>);}
       else{ return (<span style={{fontSize:26, fontWeight:600}}> New book</span>) ; }
    }

    return (
        <div className='container-fluid  text-center d-flex justify-content-center'>

            <div className='row justify-content-center container-fluid col-md-12 col-11 text-center mt-2 text-light p-0 '>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}   className='col-md-9 col-lg-7 col-12 bg-dark p-0'>

                    <Button onClick={toggle} className='btn-secondary m-0  col-12 text-center' style={{fontSize:23}}> <Text open={openvalue} /></Button>
                
                </motion.div>
            </div>

    </div>);

}

export default Addbookbtn;

