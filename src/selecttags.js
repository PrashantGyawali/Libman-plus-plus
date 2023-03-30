import React from 'react'

import Select from 'react-select'

const options = 
    [
        {
            value: "Action",
            label: "Action"
        },
        {
            "value": "Adult",
            "label": "Adult"
        },
        {
            "value": "Adventure",
            "label": "Adventure"
        },
        {
            "value": "Animated",
            "label": "Animated"
        },
        {
            "value": "Animated",
            "label": "Animated"
        },
        {
            "value": "Auto-biography",
            "label": "Auto-biography"
        },
        {
            "value": "Biography",
            "label": "Biography"
        },
        {
            "value": "Comedy",
            "label": "Comedy"
        },
        {
            "value": "Drama",
            "label": "Drama"
        },
        {
            "value": "Fairy Tale",
            "label": "Fairy Tale"
        },
        {
            "value": "Family",
            "label": "Family"
        },
        {
            "value": "Fantasy",
            "label": "Fantasy"
        },
        {
            "value": "Fiction",
            "label": "Fiction"
        },
        {
            "value": "Historical",
            "label": "Historical"
        },
        {
            "value": "Horror",
            "label": "Horror"
        },
        {
            "value": "Musical",
            "label": "Musical"
        },
        {
            "value": "Mystery",
            "label": "Mystery"
        },
        {
            "value": "Religion",
            "label": "Religion"
        },
        {
            "value": "Romance",
            "label": "Romance"
        },
        {
            "value": "Sci-fi",
            "label": "Sci-fi"
        },
        {
            "value": "Short Stories",
            "label": "Short Stories"
        },
        {
            "value": "Sports",
            "label": "Sports"
        },
        {
            "value": "Thriller",
            "label": "Thriller"
        },
        {
            "value": "War",
            "label": "War"
        }
    ]


const Selecttags = (props) =>
{


const [selectedOptions, setSelectedOptions] = React.useState([]);


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
            // defaultValue={{  label: "Action", value: "Action"}}
            onChange={(o) => {setSelectedOptions(o); props.updatefn(o);}} 
            isOptionDisabled={() => selectedOptions.length >= 12} id='hmm'/> 
    </div>
</div>
);
}
;

export default Selecttags;