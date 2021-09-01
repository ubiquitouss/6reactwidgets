import axios from 'axios';
import React, {useState, useEffect} from 'react';


const Convert = ({language,text}) => {

    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);


    useEffect(() => {
        const timerId = setTimeout(()=>{
            setDebouncedText(text)
        },500);

        return () => {
            clearTimeout(timerId)
        }
    },[text]);


    useEffect(() => {

        const doTranslation = async () => {
        //    {data}, this property is from google. we can store the whole result in a different variable
        //  but here we are just taking the value that is {data}
         const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
            params: {
                q: debouncedText,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

            },
        }
    );
    setTranslated(data.data.translations[0].translatedText)

};
// at last we are calling the whole function
  doTranslation()        
}, [language, debouncedText])
   
    // if we put any language or text we will run useEffect function


    return (
        <div>
            <h1 className = "ui header">{translated}</h1>
        </div>
    )
}


export default Convert;