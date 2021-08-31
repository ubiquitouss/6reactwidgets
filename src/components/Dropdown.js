import React, {useState,useEffect,useRef} from 'react';

// we are calling options from the options on the App.js props
// we are doing the same for the selected and the onSelectedChange
const Dropdown = ({label,options,selected,onSelectedChange}) =>{

        
    const [open, setOpen] = useState(false)
    const ref = useRef();
    useEffect(()=>{
        const onBodyClick = (e)=>{
            if(ref.current.contains(e.target)){
                return;
            }
            console.log(e.target)
            // console.log('click)
            //this click works in the whole body of the document
            setOpen(false)
        }
        document.body.addEventListener('click',onBodyClick, {capture:true})

        return () => {
            document.body.removeEventListener("click", onBodyClick, {
              capture: true,
            });
          };
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
     
    //directly access to top level element
    console.log(ref.current)
    return (
        <div ref= {ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
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