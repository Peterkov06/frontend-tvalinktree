import React, { useContext, useEffect, useState } from 'react'
import { SlugContext } from '../context/SlugContextProvider'
import UserCard from '../components/UserCard';


const Home = () => {
    const {slugs} = useContext(SlugContext);

  return (
      <div className='col'>
          <h1>Linktree</h1>
            {slugs.map(x => <UserCard {...x}></UserCard>)}
      </div>
  )
}

export default Home