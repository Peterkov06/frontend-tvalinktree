import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserLinks, type UserLinkResponse } from '../services/publicAPI'

const UserPage = () => {
    const {username} = useParams()
    const [links, setLinks] = useState<UserLinkResponse | undefined>()

    useEffect(() => {
      getUserLinks(username ? username : "matukhan").then(data => setLinks(data))
    }, [])
    

  return (
    <div>
        <h1>Ez itt {username} oldala</h1>
        <ul>
            {links?.links.map(link => <li><a href={link.url}>{link.title}</a></li>)}
        </ul>
    </div>
  )
}

export default UserPage