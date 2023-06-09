import React from "react";
import Header from "./Header";
import Page3Content from "./Page3Content";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../App.css";

export default function Page3() {
    return (
        <div className="Page3">
        <Link to="/Page2" className="back-page">
            &lt;
        </Link>
        <Header />
        <Page3Content />
        <Footer />
        </div>
    );
    }