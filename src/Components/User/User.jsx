import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid}= useParams()
  return (
    <div className='text-3xl bg-slate-200 text-black'>User: {userid} </div>
  )
}

export default User