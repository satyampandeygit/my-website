import React, {createContext} from "react";
import axios from "axios";

function fetchRepoDetails(){

    let requiredData = [];

    axios.get('https://api.github.com/users/satyampandeygit/repos')
        .then(response => {
            let repoData = response.data;
            
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
        })
        .catch(err => console.log(err));
    
    return requiredData;
}

const RepoContext = createContext({
    repos: fetchRepoDetails()
});

export default RepoContext;