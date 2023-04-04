import '../App.scss'
import Tagsrender from './Tagsrenderer';
import { useBook } from "../BookContext";


export default function BookComponent(prop)
{

    
    const setdefaultvalue=(useBook()).setdefaultvalue;
    const props= prop.data;
    return (
            <div className='col-md-6 col-12 g-3 bookcomponentscale my-2 '>

                    <div className="card w-100 p-0 background-white borderblack" >
                        <div className="row g-0">

                            <div className="col-md-5 col-4" style={{aspectRatio:'0.66', border:"1px solid red", borderRadius:12}}>
                                <img   
                                alt="Not found. Use 4:3 img" 
                                className="txt-dark"
                                src={props.url}
                                style={{marginTop:0.5, border:"1px solid black", borderRadius:12 ,objectFit: 'fill',
                                maxWidth: '100%', minWidth: '100%',minHeight:'99.5%',maxHeight:'100%'}} 
                                /> 
                            </div>

                            <div className="col-8 col-md-7 p-2 d-flex flex-column h-100">
                                <div>
                                <a href='#bookbtn' style={{textDecoration:'none'}}><h4 className="txt-dark booktitle" onClick={()=>{console.log(prop,props); setdefaultvalue(props); prop.togglenewbookadding();  }}>{props.bookname}</h4></a>
                                    <h6 className="txt-dark text-end">-{props.authors}</h6>

                                    <div>
                                        <p className="txt-dark text-start descriptiontxt m-1" >{props.description}</p>
                                        <p className="txt-dark text-start  tagstxt m-0" >Tags: <Tagsrender tags={props.tags}/></p>                                        
                                    </div>
                                </div>
  

                                <div className="h-100 justify-content-center text-start" style={{display:'flex', flexDirection:'column'}} >
                                    <p className="txt-dark text-start text-truncate m-0" style={{overflow:'hidden'}}>
                                            <small className="txt-muted">Published: {props.published} </small>
                                    </p>
                                    <p className="txt-dark text-start text-truncate m-0" style={{overflow:'hidden'}}>
                                        <small className="txt-muted">Last updated: {props.updated}</small>
                                    </p>
                                    <p className='text-start'><small ><span className='txt-muted ' style={{fontSize:'11.5px'}}>ID:{props.id}</span></small></p>
                                </div>

                            </div>
                        </div>
                    </div>

            </div>
    );
}

