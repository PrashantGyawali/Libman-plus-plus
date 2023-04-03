import React from 'react'

import Select from 'react-select'
import options from '../tagoptions.json'

import { useBook } from "../BookContext";

const Selecttags = (props) =>
{


const [selectedOptions, setSelectedOptions] = React.useState([]);

let t=useBook()?.defaultvalue?.tags;

return(
<div className="container p-1">
    <div className='row '>
    
            <div className='text-right col-12 mb-1' style={{ textAlign: 'left'}}>Tags:</div>
        
            <Select 
            className='col-12'
            isMulti 
            closeMenuOnSelect={false} 
            options={options} 
            placeholder='Select Tags' 
            name="tags" 
            required  
            defaultValue={t && t}
            onChange={(o) => {setSelectedOptions(o); props.updatefn(o);}} 
            isOptionDisabled={() => selectedOptions.length >= 12} id='hmm'/> 
    </div>
</div>
);
}
;

export default Selecttags;