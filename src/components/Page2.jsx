import React from "react";
import Header from "./Header";
import Page2Content from "./Page2Content";
import Footer from "./Footer";
import { Link } from "react-router-dom";


export default function Page2() {

    return (
        <div className="Page2">
            <Link to="/" className='back-page'>&lt;</Link>
            <Header/>
            <Page2Content />
            <Footer/>
            <Link to="/Page3" className='next-page'>&gt;</Link>
        </div>
    );
};