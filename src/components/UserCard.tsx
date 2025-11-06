import React from 'react'
import type { Slug } from '../context/SlugContextProvider'
import { Link } from 'react-router-dom'

const UserCard = (props: Slug) => {
  return (
    <Link to={`/u/${props.username}`}>{props.username}</Link>
  )
}

export default UserCard