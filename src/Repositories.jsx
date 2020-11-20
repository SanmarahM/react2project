import { useState, useEffect } from 'react'

export default function Repositories(){
    const [repositories, setRepositories] = useState([])
    useEffect(()=>{
        async function getData(){
            const response = await fetch ('https://api.github.com/users/sanmarahm/repos')
            const data = await response.json()
            setRepositories(data)
        }
        getData()
    },[])

    return(
        <div>
            <h1>Meus repositórios:</h1>
            <h2>{repositories.length} repos</h2>

            <ul>
                {repositories.map(repository=>{
                    return <li key={repository.id}>{repository.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Repositories