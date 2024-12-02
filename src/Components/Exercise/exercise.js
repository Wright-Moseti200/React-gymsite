import React from "react";
import "./exercise.css";

const Exercise = () =>
{


    return (
        <div>
            <br/>
             <h3 className="services-title"><i class="fa-solid fa-dumbbell"></i> Our Popular Exercises</h3>
            <br />
            <br/>
        <div className="exercise-group">
                <div className="exercise">
                    <div className="image">
                    </div>
            <p className="par">Warm up</p>
            <div className="exercise-group">
                <p>15min</p>
                <p>3sets</p>
                <p>100calories</p>
                </div>    
                </div>
         <div className="exercise">
            <div className="image2">
                    </div>
            <p className="par">Shoulder Workout</p>
            <div className="exercise-group">
                <p>20min</p>
                <p>4sets</p>
                <p>100calories</p>
            </div>
        </div>
         <div className="exercise">  
            <div className="image3">
                    </div>
            <p className="par">Yoga Session</p>
            <div className="exercise-group">
                <p>55min</p>
                <p>5sets</p>
                <p>250calories</p>
            </div>
        </div>
         <div className="exercise">
            <div className="image4">
                    </div>
            <p className="par">Leg Workout</p>
            <div className="exercise-group">
                <p>18min</p>
                <p>4sets</p>
                <p>10calories</p>
            </div>
            </div>
            </div>  
            </div>
    );
}
 
export default Exercise