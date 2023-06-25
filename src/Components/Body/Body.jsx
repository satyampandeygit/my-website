import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RepoContext from "../../Utils/RepoContext";

export const Body = () => {

    const {reposList} = useContext(RepoContext);

    return (
        <React.Fragment>
                <div className="body-wrapper">

                    <div className="satyam-content-wrapper">

                        <div className="satyam-content">
                            
                            <div className="satyam-description">
                                Hey! Little bit about me...<br></br>
                                I am Software Developer with total experience of close to 2 Years. 
                                I am currently working at Optum(UHG) from past 18 months. 
                                I have done my graduation in Electrical Engieering from NIT Raipur.

                                <div style={{
                                    marginTop: '5px'
                                }}>
                                    <b>What I know:</b>
                                    <ul>
                                        <li>I have been working with frontend technologies for more than 2 years. </li>
                                        <li>I have good grasp on <b>React Library</b> and currently developing project using React.</li>
                                        <li>I have worked with <b>Angular</b> too.</li>
                                        <li>I have experience with <b>Spring boot, Java</b> and I have made some project too using spring boot framework.</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="satyam-projects-container">
                                {
                                    reposList?.length > 0 ?
                                    (reposList?.map((repo,index)=>{
                                            return(
                                                <div key={index+1} className="repo-card">
                                                    <div className="repo-card-header">
                                                        <b>{repo.name}</b>
                                                        <span>{repo.language}</span>
                                                    </div>


                                                    <div 
                                                        className="repo-card-details"
                                                        style={{
                                                            marginTop: '10px',
                                                        }}
                                                    >
                                                        <div className="repo-description">
                                                            {repo.description? repo.description : 'Add Project description'}
                                                        </div>
                                                        <div 
                                                            className="project-repo-link" 
                                                            onClick={()=>{
                                                                window.open(repo.url,'_blank');
                                                            }}
                                                        > 
                                                            <i className="fa-brands fa-github-square fa-lg"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                    })
                                    ) : 'Satyam Projects'
                                }
                            </div>
                        </div>

                    </div>
                </div>
        </React.Fragment>
    )
}