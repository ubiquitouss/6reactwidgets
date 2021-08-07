import React, {useState} from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown  from './components/Dropdown'


const items = [
    {
        title: 'What is React?',
        content: 'React is a front  end javascript framework'
    },
    {
        title: 'Why is React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }

]


const options = [
    {
        label: 'The Color Red',
        value: 'Red'
    },
    {
        label: 'The Color Green',
        value: 'Green'
    },
    {
        label: 'The shade of Blue',
        value: 'Blue'
    }
]


export default () => {
    const [selected,setSelected] = useState(options[0])
    const [showDropdown,setShowDropdown] = useState(true)
    return (
        <div>
            <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            { showDropdown ?
            <Dropdown 
            selected={selected}
            onSelectedChange={setSelected} 
            options={options}
            /> : null
        }
        </div>
    /* we are passinng the props as the options of this page */
    )
}