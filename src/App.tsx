import { useEffect, useState } from "react"
import { api } from "./services/api"


type Repo = {
  id: number | string,
  full_name: string
}

function App() {

        const [repos, setRepos] = useState<Repo[]>([])

         const getRepos = (url: string)=>{
            api.get(url)
              .then(
                res=>{
                  setRepos(res.data)
                }
              )
         }

         useEffect(()=>{
          const apiUrl = '/users/MatheusMottaGit/repos'
          getRepos(apiUrl)
        }, [])

  return (
    <div>
      <ul>
        {
          repos.map(
            repo=>(
              <li key={repo.id}>{repo.full_name}</li>
            )
          )
        }
      </ul>
    </div>
  )
}

export default App
