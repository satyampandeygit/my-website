import React from "react";
import { Header } from "./Components/Header";
import { Body } from "./Components/Body";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
    return(
        <React.Fragment>
            <BrowserRouter>
                <div style={{
                    // backgroundColor: 'aqua',
                    height: '1000px',
                }}>
                    <Header/>
                    <Body/>
                </div>
            </BrowserRouter>
        </React.Fragment>
    )
};