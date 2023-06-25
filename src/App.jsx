import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { Body } from "./Components/Body";
import { BrowserRouter } from "react-router-dom";
import RepoContext from "./Utils/RepoContext";

export const App = () => {

    const [repos, setRepos] = useState([]);

    const showTheseRepos = ['Bill-App', 'bill-app-backend', 'Minsweeper-Project', 'my-website', 'namaste-react', 'xharktank']

    async function fetchRepoDetails(){

        let requiredData = [];

        const response = await fetch('https://api.github.com/users/satyampandeygit/repos');
            
        const repoData = await response.json();

        repoData.forEach(repo => {
            if(repo.private===false && repo.fork===false && repo.language && showTheseRepos.includes(repo.name)){
                let newObject = {
                    name: repo?.name,
                    url: repo?.html_url,
                    description: repo?.description,
                    language: repo?.language
                };
                requiredData.push(newObject);
            }
        });

        setRepos(requiredData);
    }

    useEffect(() =>{
        fetchRepoDetails();
    },[]);

    return(
        <React.Fragment>
            <BrowserRouter>
                <RepoContext.Provider value={{
                    reposList: repos
                }}>
                    <div style={{
                        // backgroundColor: 'aqua',
                        height: '1000px',
                    }}>
                        <Header/>
                        <Body/>
                    </div>
                </RepoContext.Provider>
            </BrowserRouter>
        </React.Fragment>
    )
};