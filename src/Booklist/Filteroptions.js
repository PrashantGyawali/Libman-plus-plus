import  {motion}  from "framer-motion";
import Select from 'react-select'
import { useState } from "react";
import options from '../tagoptions.json'
import { useBook } from "../BookContext";

export default function Filteroptions(props){

    const [selectedOptions, setSelectedOptions] = useState([]); //used to set maximum no of tags for filtering to 5
    let theme=useBook().darkmode;
//animation
    const filterdivanimation={
        key:'addbookbtn',
        initial:{y: '-50%', opacity: 0, scaleY:0},
        animate:{y: 0, opacity: 1, scaleY: 1},
        transition:{duration:0.3, ease: "easeOut"},
        exit:{y: "-50%", opacity: 0, scaleY:0, transition:{duration:0.3}}
        }; 

    return(
    <motion.div {...filterdivanimation}>
        <div className='container-fluid p-0 background-light' style={{border:'1px solid grey', borderRadius:'0 0 10px 10px' , zIndex:1000}}>
            <div className="h4 px-3 text-start txt-dark">Filter By:</div>

                <div className="container-fluid pb-3 bg-light">

                    <div className="mb-1">
                        <input type="text" className="form-control text-start background-white  txt-dark " placeholder="Book name:" id='booknamefilter' onChange={(e)=>{props.setBookname(e.target.value)}}/>
                    </div>

                    <div className=" mb-1">
                        <input type="text" className="form-control text-start background-white txt-dark" placeholder="Author:" id='authorfilter' onChange={(e)=>{props.setauthorname(e.target.value)}}/>
                    </div>

                    <Select 
                    className='col-12 '
                    isMulti 
                    closeMenuOnSelect={false} 
                    options={options} 
                    placeholder='Select Tags'
                    name="tags" 
                    required  
                    styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          backgroundColor: theme ? 'black' : 'white',
                        }),
                        menuPortal: base => ({ ...base, zIndex: 9999})
                      }}
                    onChange={(o) => {setSelectedOptions(o); props.settags(o);}} 
                    isOptionDisabled={() => selectedOptions.length >= 5} 
                    id='filtertags' 
                    style={{textAlign:'left'}} 
                    menuPortalTarget={document.body} 
                    />
            </div>
        </div>    
    </motion.div>
    );
}