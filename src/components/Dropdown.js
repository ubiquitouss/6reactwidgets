import React, {useState,useEffect} from 'react';

// we are calling options from the options on the App.js props
// we are doing the same for the selected and the onSelectedChange
const Dropdown = ({options,selected,onSelectedChange}) =>{

        
    const [open, setOpen] = useState(false)
    useEffect(()=>{
        document.body.addEventListener('click',()=>{
            // console.log('click)
            //this click works in the whole body of the document
            setOpen(false)
        },{capture:true})
    },[])
    const renderedOptions = options.map((option)=>{
        //with this if part of the code what we are doing is
        //when we select an option, that option becomes deleted from the list 
        //and only shows in the selected item
        if(option.value === selected.value){
            return null;
        }
        return (
            <div key={option.value} 
            className = "item"
            //onclick we are setting the option
            onClick={()=> onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    })


    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                {/* it's just changing whatever the value of open is */}
                <div onClick={()=> setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active':''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open?'visible transition':''}`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;