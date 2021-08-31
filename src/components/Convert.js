import React, {useState, useEffect} from 'react';


const Convert = ({language,text}) => {

    useEffect(() => {
        console.log('New language or text')
    }, [language, text])
   
    // if we put any language or text we will run useEffect function


    return <div />
}


export default Convert;