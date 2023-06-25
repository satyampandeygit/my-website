import React, { useEffect, useState } from "react";

export const Modal = ({
    modalContent,
    modalId
}) => {

    return (
        <React.Fragment>
            <div id={modalId} className="modal-div">
                <div className="modal-content">
                    <span onClick={()=>{
                        const modalDiv = document.getElementById("contact-modal");
                        modalDiv.style.display = "none";
                        
                        const emailNotifyDiv = document.getElementById("email-notify-div");
                        emailNotifyDiv.style.display = "none";
                    }} className="close">&times;</span><br/>
                    { modalContent }
                </div>
            </div>
        </React.Fragment>
    )
}