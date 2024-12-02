import React from "react";
import "./Ask.css";

const Ask = () =>
{
    return (
        <div className="ask">
            <br />
            <h3 className="services-title Ask"><i class="fa-solid fa-dumbbell"></i> Ask about Gyms</h3>
            <br />
            <div className="input-group2">
                <input className="input2" placeholder="Enter your fullname"/>
                <input className="input2" placeholder="Enter your email"/>
                <input className="input2" placeholder="Enter your subject"/>
            </div>
            <br />
            <textarea placeholder="Enter your message">
            </textarea>
            <br />
            <button>Send Message</button>
      </div>  
    );
}
 
export default Ask;