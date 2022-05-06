import React from "react";
import { IoMdSend } from "react-icons/io"

const Newsletter = ()=>{
    return(
        <div className="newsletter">
            <h1 className="newsletter-title">Newsletter</h1>
            <p className="newsletter-desc">Get timely updates from your favorite products.</p>
            <div className="email-input-bar">
                <input type='text' placeholder="Your email" className="email-input-bar-text"/>
                <IoMdSend className="email-input-bar-send" />
            </div>
        </div>
    );
}

export default Newsletter;