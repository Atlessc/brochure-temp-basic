import React from "react";
import '../App.css';

export default function Page2Content() {
    return (
        <div className="Page2Container">
            <div className="Page2-Header">Services We Offer</div>
            <div className="Page2-Content">
                <div className="Page2-Content-Item">
                    <div className="Page2-Content-Item-Header">Service 1</div>
                    <div className="Page2-Content-Item-Content">We offer service 1</div>
            </div>
                <div className="Page2-Content-Item">
                    <div className="Page2-Content-Item-Header">Service 2</div>
                    <div className="Page2-Content-Item-Content">We offer service 2</div>
                </div>
        </div>
        </div>

    );
};