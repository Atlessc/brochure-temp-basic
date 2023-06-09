import React from "react";
import "../App.css"

export default function Page3Content() {
    return (
        <div className="Page3Content">
        <div className="Page3-Header">Contact Us</div>
        <div className="Page3-Body">
            <p>You can contact us by phone at 555-555-5555 or by email at email@email.company</p>
            <div className="Page3-Body-Contact">
            <div className="Page3-Body-Contact-Phone">
                <div className="phone-label">Phone:</div><div className="phone-number">555-555-5555</div>
                </div>
            <div className="Page3-Body-Contact-Email">
                <div className="email-label">Email:</div><div className="email-address">email@email.company</div>
            </div>
        </div>
        </div>
        {/* more content goes here */}
        </div>
    );
    }