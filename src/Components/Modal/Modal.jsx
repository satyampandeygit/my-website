import React, { useEffect, useState } from "react";

export const Modal = ({
    modalContent,
    modalId
}) => {

    return (
        <React.Fragment>
            <div id={modalId} className="modal-div">
                <div className="modal-content-self">
                    <span onClick={()=>{
                        const modalDiv = document.getElementById("contact-modal");
                        modalDiv.style.visibility = "hidden";
                        
                        const emailNotifyDiv = document.getElementById("email-notify-div");
                        emailNotifyDiv.style.visibility = "hidden";
                    }} className="close">&times;</span><br/>
                    { modalContent }
                </div>
            </div>
        </React.Fragment>
    )
}