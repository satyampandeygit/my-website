import React, {useState} from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import profilePhoto from '../../../assets/profile-photo/profilePhoto.jpeg';
import { Body } from "../Body";
import { Modal } from "../Modal";

const ModalContent = () => {

    const [copyEmailSuccess, setCopyEmailSuccess] = useState(false);

    return (
        <React.Fragment>

            <div className="modal-wrapper">

                {/* <div className="modal-header-menu">
                    <Link className="no-style-link" to="https://drive.google.com/file/d/1SPYP8m8RXGvGNSIVToDLtM2eJrnjqOt3/view?usp=sharing" target="_blank">
                        <div className="sidepane-menuItem">
                            <i className="menu-icon fa-lg fa-regular fa-file"></i>
                            <div className="sidepane-menuItem-title">
                                Resume
                            </div>
                        </div>
                    </Link>
                </div> */}

                <div id="email-notify-div">Email Copied!</div>

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
                        if(emailNotifyDiv.style.visibility === "hidden"){
                            emailNotifyDiv.style.visibility = "visible";
                        }
                        setTimeout(()=>{
                            emailNotifyDiv.style.visibility = "hidden";
                        },3000);
                    }}>Copy</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export const MainContent = () => {
    return (
        <React.Fragment>
            <Container fluid="md">
                <Row>
                    <Col md="12" lg="4" >
                        <div id="left-body">
                            <div className="profile-photo-wrapper">
                                <img className="profile-photo" src={profilePhoto} alt=""/>
                            </div>

                            <div className="profile">

                                <div className="profile-title">
                                    Satyam Pandey<br/>
                                    <span>Software Engineer</span>
                                </div>

                                <div className="icons-parent">
                                    <div className="icons">
                                        <Link className="no-style-link" to="https://www.linkedin.com/in/satyampandeynitrr" target="_blank">
                                            <i className="fa fa-brands fa-linkedin fa-lg"></i>
                                        </Link>
                                    </div>

                                    <div className="icons">
                                        <Link className="no-style-link" to="https://www.github.com/satyampandeygit" target="_blank">
                                            <i className="fa fa-brands fa-github fa-lg"></i>
                                        </Link>
                                    </div>

                                    <div className="icons">
                                        <Link className="no-style-link" to="https://twitter.com/SatyamP38550221" target="_blank">
                                            <i className="fa fa-brands fa-twitter fa-lg"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className="contact-button-div">
                                    <button 
                                        className="contact-btn" 
                                        type="submit" 
                                        onClick={()=>{
                                            const modalDiv = document.getElementById("contact-modal");
                                            modalDiv.style.visibility = "visible";
                                        }}>
                                            Contact me
                                        </button>
                                </div>

                                <Modal modalId="contact-modal" modalContent={<ModalContent/>}/>

                            </div>
                        </div>
                    </Col>
                    <Col md="12" lg="8">
                        <div id="right-body">
                            <Body/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}