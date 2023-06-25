import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../Modal";

const ModalContent = () => {

    const [copyEmailSuccess, setCopyEmailSuccess] = useState(false);

    return (
        <React.Fragment>

            <div className="modal-wrapper">

                <div className="modal-header-menu">
                    <Link className="no-style-link" to="https://drive.google.com/file/d/1SPYP8m8RXGvGNSIVToDLtM2eJrnjqOt3/view?usp=sharing" target="_blank">
                        <div className="sidepane-menuItem">
                            <i className="menu-icon fa-lg fa-regular fa-file"></i>
                            <div className="sidepane-menuItem-title">
                                Resume
                            </div>
                        </div>
                    </Link>

                    <Link className="no-style-link" to="https://www.github.com/satyampandeygit" target="_blank">
                        <div className="sidepane-menuItem">
                            <i className="fa-brands fa-github menu-icon fa-xl"></i>
                            <div className="sidepane-menuItem-title">
                                    GitHub
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="modal-header">
                    Contact me via
                </div>

                <div className="email-detail">

                    Email:   
                    <div id="email">psatyam360@gmail.com</div>
                    <div className="copy-email-btn" onClick={()=>{
                        const copiedEmail = document.getElementById("email");
                        navigator.clipboard.writeText(copiedEmail.innerHTML);
                        
                        const emailNotifyDiv = document.getElementById("email-notify-div");
                        if(emailNotifyDiv.style.display === "none"){
                            emailNotifyDiv.style.display = "block";
                        }
                        setTimeout(()=>{
                            emailNotifyDiv.style.display = "none";
                        },3000);
                    }}>Copy</div>

                    <div id="email-notify-div" className="copy-email-success-notify">Email Copied!</div>
                    
                </div>
                <div className="social-icons">

                    Socials: 
                    <Link className="no-style-link" to="https://www.linkedin.com/in/satyampandeynitrr" target="_blank">
                        <i className="menu-icon fa-brands fa-linkedin fa-xl"></i>
                    </Link>

                    <Link className="no-style-link" to="https://twitter.com/SatyamP38550221" target="_blank">
                        <i className="menu-icon fa-twitter fa-brands fa-xl"></i>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export const Header = () => {

    const [modalOpener, setModalOpener] = useState(false);

    return(
        <React.Fragment>
            <header className="header-wrapper">
                <div className="hedaer-intro">
                    <span className="header-greeting">Hi! Welcome to my website.</span><br/>
                </div>

                <div className="header-menu">

                    <Link className="no-style-link" to="https://drive.google.com/file/d/1SPYP8m8RXGvGNSIVToDLtM2eJrnjqOt3/view?usp=sharing" target="_blank">
                        <div className="sidepane-menuItem">
                            <i className="menu-icon fa-lg fa-regular fa-file"></i>
                            <div className="sidepane-menuItem-title">
                                Resume
                            </div>
                        </div>
                    </Link>

                    <Link className="no-style-link" to="https://www.github.com/satyampandeygit" target="_blank">
                        <div className="sidepane-menuItem">
                            <i className="fa-brands fa-github menu-icon fa-xl"></i>
                            <div className="sidepane-menuItem-title">
                                    GitHub
                            </div>
                        </div>
                    </Link>
                
                    <div className="contact-button-div">
                        <button className="contact-btn" type="submit" onClick={()=>{
                            const modalDiv = document.getElementById("contact-modal");
                            modalDiv.style.display = "block";
                        }}>Contact me</button>
                    </div>

                    <Modal modalId="contact-modal" modalContent={<ModalContent/>}/>

                    <div className="bar-button">
                        <i className="fa-solid fa-bars fa-lg" onClick={()=>{
                            const modalDiv = document.getElementById("contact-modal");
                            modalDiv.style.display = "block";
                        }}></i>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}