import React, {useState} from 'react'

const Accordion = ({items})=>{

    const [activeIndex,setActiveIndex] = useState(null)

    const onTitleClick = (index) => {
        //! here we are setting new value to the setActiveIndex
        //after the click the value will be the index
        //after the setting, the activeIndex will get the value
        setActiveIndex(index)
    }

    const renderedItems = items.map((item,index) =>{
        const active = index === activeIndex ? 'active' : '';
        return (
            <React.Fragment key={item.title}>
                <div 
                className={`title ${active}`}
                //we are geting the active from 2nd line of the para
                // it will be added automatically accorting to the condition 
                onClick = {()=>{onTitleClick(index)}}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return (
    <div className="ui styled accordion">
        {renderedItems}
    </div>
    )
};

export default Accordion;