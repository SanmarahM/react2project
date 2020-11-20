import {useState, useEffect} from 'react'

const Repos = ()=>{
    const [repositories, setRepositories] = useState([])
    const [reposFilter, setReposFilter] = useState([])
    const [search, setSearch] = useState('')

    useEffect(()=>{
        async function getData(){
            const response = await fetch('https://api.github.com/users/sanmarahm/repos')
            const data = await response.json()

            setRepositories(data)
        }
        getData()
    },[])

    useEffect(()=>{
        setReposFilter(
            repositories.filter(repo =>{
                return repo.name.includes(search)
            })
        )
    },[search, repositories])

    return(
        <div>
            <input
                type="text"
                placeholder="Escreve aí"
                onChange={e=>{setSearch(e.target.value)}}
            />

            <h1>Meus repositórios:</h1>
            <ul>{reposFilter.map(repo=>{
                return <li key={repo.id}>{repo.name}</li>
            })}</ul>
        </div>
    )
}

export default Repos