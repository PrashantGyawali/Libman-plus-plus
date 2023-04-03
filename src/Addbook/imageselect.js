import { useEffect } from 'react';
import '../App.scss'
import { useBook } from "../BookContext";

function ImageSelect(props)
{ 
    let t=useBook()?.defaultvalue?.url;

    function updateform(e){
        props.updateformfunc(e);
    }

    const updateurl=()=>
    {
        props.setCoverlink(document.getElementById('url').value);
    }


    useEffect(()=>{document.getElementById('coverimg').style.opacity='1';
        document.getElementById('coverimg').addEventListener('error', function handleError() {
        document.getElementById('coverimg').style.opacity='0.5';
        document.getElementById('url').value='';
      });},[props.Coverlink])

    return(
    <div className="col-lg-5 col-md-9 p-0 " style={{border:"3px solid",   borderRadius: "15px 0px 0px 15px ",   aspectRatio: "0.78"}}>
                    
    <div className='fallbackimg' style={{aspectRatio:'0.78', borderRadius: "15px 0px 15px 15px "}}>
        <img   
        alt="Not found. Use 4:3 img" 
        id='coverimg'
        src={props.Coverlink} 
        style={{marginTop:0.5, border:"1px solid black", borderRadius:14 ,objectFit: 'fill',
        maxWidth: '99%', minWidth: '99%', minHeight:'100%',  aspectRatio: "0.75"}} 
        defaultValue={t && t}
        /> 
    </div>
    <div className="mt-1"><span className="text-center w-100  h5" id="basic-addon3" >Book cover url:</span></div> 
    <div className="input-group m-1 p-2">
    <input type="text" className="form-control" id="url" name='url' aria-describedby="basic-addon3" onChange={(e)=>updateform(e)} defaultValue={t && t} required/>
    <button className="btn btn-outline-secondary" type="button" onClick={updateurl}>&#10004;</button>
    </div>
</div>)
} 
export default ImageSelect;