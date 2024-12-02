import React, { useState , useEffect } from "react";
import "./bmi.css";
const Bmi = () =>
{

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bool, setBool] = useState(false);
    const [value, setValue] = useState("");
  const [maxHeight, setMaxHeight] = useState("");

  useEffect(() => {
setMaxHeight(height/100)
  },[height]);    
    
    let handleClick = () =>
    {
        setBool(true);
        setValue(weight/(maxHeight*maxHeight));
     }



    return (
      <div className="div5">
        <br></br>
        <br></br>
        <h3 className="heading">
          <i class="fa-solid fa-dumbbell"></i>Calculate Your BMI
        </h3>
        <div className="div6">
          <div>
            <div className="weight">Weight(kg)</div>
            <input
              type="text"
              placeholder="Enter your Weight"
              value={weight}
              onInput={(e) => {
                setWeight(e.target.value);
              }}
            />
          </div>
          <div>
            <div className="weight">Height(cm)</div>
            <input
              type="text"
              placeholder="Enter your Height"
              value={height}
              onInput={(e) => {
                setHeight(e.target.value);
              }}
            />
          </div>
          <button onClick={handleClick}>Calculate BMI</button>
        </div>
        {bool && (
          <p className="BMI">
            Your BMI is <strong>{value.toFixed(2)}</strong>{" "}
          </p>
        )}
      </div>
    );
}
 
export default Bmi;