import '../App.scss'
import Tagsrender from './Tagsrenderer';
import { useBook } from "../BookContext";


export default function BookComponent(prop)
{

    
    const setdefaultvalue=(useBook()).setdefaultvalue;
    const props= prop.data;
    return (
            <div className='col-md-6 col-12 g-3 bookcomponentscale '>

                    <div className="card w-100 p-0" >
                        <div className="row g-0">

                            <div className="col-md-5 col-4" style={{aspectRatio:'0.66', border:"1px solid red", borderRadius:12}}>
                                <img   
                                alt="Not found. Use 4:3 img" 
                                src={props.url}
                                style={{marginTop:0.5, border:"1px solid black", borderRadius:12 ,objectFit: 'fill',
                                maxWidth: '99%', minWidth: '99%',minHeight:'99%',maxHeight:'100%'}} 
                                /> 
                            </div>

                            <div className="col-8 col-md-7 p-2 d-flex flex-column h-100">
                                <div>
                                <a href='#bookbtn' style={{textDecoration:'none'}}><h6 className="text-dark booktitle" onClick={()=>{console.log(prop,props); setdefaultvalue(props); prop.togglenewbookadding();  }}>{props.bookname}</h6></a>
                                    <h6 className="text-dark text-end">-{props.authors}</h6>

                                    <div>
                                        <p className="text-dark text-start descriptiontxt m-1" >{props.description}</p>
                                        <p className="text-dark text-start  tagstxt m-0" >Tags: <Tagsrender tags={props.tags}/></p>                                        
                                    </div>
                                </div>
  

                                <div className="h-100 justify-content-center text-start" style={{display:'flex', flexDirection:'column'}} >
                                    <p className="text-dark text-start text-truncate m-0" style={{overflow:'hidden'}}>
                                            <small className="text-muted">Published: {props.published} ~tempTag:{props.id}</small>
                                    </p>
                                    <p className="text-dark text-start text-truncate m-0" style={{overflow:'hidden'}}>
                                        <small className="text-muted">Last updated: {props.updated}</small>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

            </div>
    );
}

