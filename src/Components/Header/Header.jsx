import React from "react";

export const Header = () => {
    return(
        <React.Fragment>
            <header className="header-wrapper">
                <span className="header-greeting">Hi! This is Satyam's Page</span><br/>
                <span style={{
                    paddingLeft: '20px',
                }}>you visited, Thank You.</span>
            </header>
        </React.Fragment>
    )
}