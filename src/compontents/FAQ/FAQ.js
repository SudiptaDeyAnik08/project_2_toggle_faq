import React, { useState } from "react";

import {faqdata} from './data'
import SingleFAQ from "./SingleFAQ";

import './FAQ.css'


const FAQ =()=>{
     

    const [faq,setFaq] = useState(faqdata); 


    return(
        <div className="FAQChild">
            <h1>Hi from FAQ</h1>
            {
                faq.map(res=> 
                <SingleFAQ key={res.id} singleFAQ ={res}></SingleFAQ>)
            }
        </div>
    )
}

export default FAQ;