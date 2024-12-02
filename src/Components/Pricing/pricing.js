import React from "react";
import "./pricing.css";

const Pricing = () =>
{
    return (
        <div>
            <h3 className="services-title" id="plan"><i class="fa-solid fa-dumbbell"></i> Our Pricing Plan</h3>
            <br/>
            <div className="pricing-group">
                <fieldset className="prices">
                    <br />
                    <h1 className="h9">Basic Plan</h1>
                    <h1>$165.00/month</h1>
                    <hr />
                    <p><i class="fa-regular fa-square-check"></i> Get access to all gym classes</p>
                    <p><i class="fa-regular fa-square-check"></i> Unlimited yoga classes</p>
                    <p><i class="fa-regular fa-square-check"></i> Use of lockers</p>
                    <br />
                    <div className="button-group2">
                        <button>Select plan</button>
                        </div>
                </fieldset>
                <fieldset className="prices">
                    <legend>Recommended</legend>
                    <h1 className="h9">Premium Plan</h1>
                    <h1>$200.00/month</h1>
                    <hr />
                    <p><i class="fa-regular fa-square-check"></i> Get access to all gym classes</p>
                    <p><i class="fa-regular fa-square-check"></i> Unlimited yoga classes</p>
                    <p><i class="fa-regular fa-square-check"></i> Use of lockers</p>
                    <p><i class="fa-regular fa-square-check"></i> Weekday pool access</p>
                    <p><i class="fa-regular fa-square-check"></i> Free gym t-shirt</p>
                    <p><i class="fa-regular fa-square-check"></i> 20% discount on all gym products</p>
                    <br />
                    <div className="button-group2">
                        <button>Select Plan</button>
                        </div>
                </fieldset>
                <fieldset className="prices">
                    <h1 className="h9">VIP Plan</h1>
                    <h1>$350.00/month</h1>
                    <hr />
                    <p><i class="fa-regular fa-square-check"></i> Get access to all gym classes</p>
                    <p><i class="fa-regular fa-square-check"></i> Unlimited yoga classes</p>
                    <p><i class="fa-regular fa-square-check"></i> Use of lockers</p>
                    <p><i class="fa-regular fa-square-check"></i> Access to pool 6 days a week</p>
                    <p><i class="fa-regular fa-square-check"></i> Free gym t-shirt</p>
                    <p><i class="fa-regular fa-square-check"></i> Personal trainer for 3 days a week</p>
                    <br />
                    <div className="button-group2">
                        <button>Select Plan</button>
                        </div>
              </fieldset>
            </div>
        </div>
    );
}
 
export default Pricing;