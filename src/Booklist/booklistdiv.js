// import { Container } from "react-bootstrap";
import BookComponent from "./Bookcomponent";
import data from '../testdata.json'
import "../App.scss";

function Booklist(){
    let x= data; 
    return (
        <div className='row p-0 m-0' style={{justifyContent:'flex-start'}}>
            {x.map((e)=><BookComponent data={e}/>)}
        </div>
    );
}

export default Booklist;