import { useEffect, useState } from "react";

function GithubUser({username}){
    const [data,setData]=useState("")
    async function fetchGituser(username){
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()
            setData(json)
        } catch (error) {
            setError(error)
        }
    }
    useEffect(()=>{
        fetchGituser(username)
    },[username])
    return(
        <h1>{data.name}</h1>
    )
}
export default GithubUser