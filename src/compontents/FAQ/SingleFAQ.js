import React, { useState } from "react";

import './SingleFAQ.css';

const SingleFAQ = (props)=>{
    const {id,decription,title} = props.singleFAQ;

    const [toggle,setToggle] = useState(false)


    return(
        <div className="SingleFAQ">
            <div>
              <h3>{title}</h3>
              <button onClick={()=>setToggle(!toggle)} >
                {toggle ? '-' : '+'}
              </button>
            </div>
            {
                toggle && <p>{ decription}</p>
            }
        </div>
    )
}

export default SingleFAQ; 