import  {motion}  from "framer-motion";
import Select from 'react-select'
import { useState } from "react";
import options from '../tagoptions.json'

export default function Filteroptions(props){

    const [selectedOptions, setSelectedOptions] = useState([]); //used to set maximum no of tags for filtering to 5

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
        <div className='container-fluid p-0 bg-white' style={{border:'1px solid grey', borderRadius:'0 0 10px 10px' , zIndex:1000}}>
            <div className="h4 px-3 text-start">Filter By:</div>

                <div className="container-fluid pb-3">

                    <div className="form-floating mb-1">
                        <input type="Text" className="form-control text-start" placeholder="Book name" id='booknamefilter' onChange={(e)=>{props.setBookname(e.target.value)}}/>
                        <label>Book Name:</label>
                    </div>

                    <div className="form-floating mb-1">
                        <input type="text" className="form-control text-start" placeholder="Author" id='authorfilter' onChange={(e)=>{props.setauthorname(e.target.value)}}/>
                        <label>Authors:</label>
                    </div>

                    <Select 
                    className='col-12 '
                    isMulti 
                    closeMenuOnSelect={false} 
                    options={options} 
                    placeholder='Select Tags'
                    name="tags" 
                    required  
                    // defaultValue={{  label: "Action", value: "Action"}}
                    onChange={(o) => {setSelectedOptions(o); props.settags(o);}} 
                    isOptionDisabled={() => selectedOptions.length >= 5} 
                    id='filtertags' 
                    style={{textAlign:'left'}} 
                    menuPortalTarget={document.body} 
                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999})}}
                    />
            </div>
        </div>    
    </motion.div>
    );
}