import React from "react";
import "./trainer.css";

const Trainer = () =>
{
    return (
        <div>
            <br/>
            <h3 className="services-title"><i class="fa-solid fa-dumbbell"></i> Our Expert Trainers</h3>
            <br />
            <div className="trainers">
                <div className="trainers-group">
                    <div className="trainee">
                        <h3>Dr John snow</h3>
                        <p>Body building Coach</p>
                    </div>
                </div>
                 <div className="trainers-group">
                    <div className="trainee">
                        <h3>Dr John snow</h3>
                        <p>Body building Coach</p>
                    </div>
                </div>
                 <div className="trainers-group">
                    <div className="trainee">
                        <h3>Dr John snow</h3>
                        <p>Body building Coach</p>
                    </div>
                </div>
                 <div className="trainers-group">
                    <div className="trainee">
                        <h3>Dr John snow</h3>
                        <p>Body building Coach</p>
                    </div>
                </div>
            </div>
            <br />
            <p className="trainers-button"><button>View All Trainers</button></p>
        </div>
)
}
 
export default Trainer;