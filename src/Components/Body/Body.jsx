import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Body = () => {

    const [repos, setRepos] = useState([]);

    async function fetchRepoDetails(){

        let requiredData = [];

        const response = await fetch('https://api.github.com/users/satyampandeygit/repos');
            
        const repoData = await response.json();

        console.log(repoData)

        repoData.forEach(repo => {
            if(repo.private===false && repo.fork===false ){
                let newObject = {
                    name: repo?.name,
                    url: repo?.html_url,
                    description: repo?.description,
                    language: repo?.language
                };
                requiredData.push(newObject);
            }
        })

        console.log(requiredData);

        setRepos(requiredData);
    }

    useEffect(()=>{
        fetchRepoDetails();
    },[])

    return (
        <React.Fragment>
            <div className="body-wrapper">
                <div className="sidepane-div">
                    <Link className="no-style-link" to="#" target="_blank">
                        <div className="sidepane-menuItem">
                                Resume
                        </div>
                    </Link>

                    <Link className="no-style-link" to="https://www.github.com/satyampandeygit" target="_blank">
                        <div className="sidepane-menuItem">
                            GitHub
                        </div>
                    </Link>

                    <Link className="no-style-link" to="https://www.linkedin.com/in/satyampandeynitrr" target="_blank">
                        <div className="sidepane-menuItem">
                        
                            LinkedIn
                        </div>
                    </Link>

                    <Link className="no-style-link" to="https://twitter.com/SatyamP38550221" target="_blank">
                        <div className="sidepane-menuItem">
                        
                            Twitter
                        </div>
                    </Link>
                </div>

                <div className="satyam-content-wrapper">

                    <div className="satyam-content">
                        Hey! Little bit about me...
                        <div className="satyam-description">
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
                                repos.length > 0 ?
                                (repos.map((repo,index)=>{
                                    if(repo.language){
                                        return(
                                            <div key={index+1} className="repo-card">
                                                <div className="repo-card-header">
                                                    <b>{repo.name}</b>
                                                    <span>{repo.language}</span>
                                                </div>


                                                <div 
                                                    className="repo-card-description"
                                                    onClick={()=>{
                                                        window.open(repo.url,'_blank');
                                                    }}
                                                    style={{
                                                        marginTop: '10px',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    {repo.description? repo.description : 'Add Project description'}
                                                    <br/><br/>  
                                                    GitHub Repository 
                                                </div>
                                            </div>
                                        )
                                    }
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