import '../App.scss'
import Tagsrender from './Tagsrenderer';
export default function BookComponent(prop)
{

    const props= prop.data;
    return (
            <div className='col-md-6 col-12 g-3 bookcomponentscale'>

                    <div className="card w-100 p-0" >
                        <div className="row g-0">

                            <div className="col-md-5 col-4" style={{aspectRatio:'0.78', border:"1px solid red", borderRadius:12}}>
                                <img   
                                alt="Not found. Use 4:3 img" 
                                src={props.url}
                                style={{marginTop:0.5, border:"1px solid black", borderRadius:12 ,objectFit: 'fill',
                                maxWidth: '99%', minWidth: '99%', minHeight:'100%'}} 
                                /> 
                            </div>

                            <div className="col-8 col-md-7 p-2 d-flex flex-column">
                                <div>
                                <h4 className="text-dark">{props.bookname}</h4>
                                    <h6 className="text-dark text-end">-{props.authors}</h6>

                                    <div>
                                        <p className="text-dark text-start descriptiontxt m-1" >{props.description}</p>
                                        <p className="text-dark text-start  tagstxt m-0" >Tags: <Tagsrender tags={props.tags}/></p>                                        
                                    </div>
                                </div>
  

                                <div className="h-100 justify-content-center text-start" style={{display:'flex', flexDirection:'column'}} >
                                <p className="text-dark text-start text-truncate m-0" style={{overflow:'hidden'}}>
                                        <small className="text-muted">Published: {props.published}</small>
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

