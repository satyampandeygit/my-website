import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../Modal";

export const Header = () => {

    const [modalOpener, setModalOpener] = useState(false);

    return(
        <React.Fragment>
            <header className="header-wrapper">
                <div className="hedaer-intro">
                    <span className="header-greeting">Hi! Welcome to my website.</span><br/>
                </div>

                {/* <div className="header-menu">
                
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
                </div> */}
            </header>
        </React.Fragment>
    )
}