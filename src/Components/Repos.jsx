import axios from 'axios'
import React, { useState, useEffect } from 'react'
import "../CSS/Repos.css"

const Repos = ({ reposUrl }) => {
    const [repos, setRepos] = useState([])
    const fetchRepos = async () => {
        const { data } = await axios.get(reposUrl)
        setRepos(data)
    }
    useEffect(() => {
        fetchRepos()
    }, [reposUrl])

    return (
        <>
            {repos.map((repo, index) => {
                return (
                    <div className='repos-container' key={index}>
                        <span>Repo Name: {repo.name} </span>
                        <span>Id: {repo.id} </span>
                        <span>Visibility: {repo.visibility} </span>
                        <span>Default Branch: {repo.default_branch} </span>
                        <span>Launage Used: {repo.language} </span>
                    </div>
                )
            })}
        </>



    )
}

export default Repos