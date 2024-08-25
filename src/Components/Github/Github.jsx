import React from 'react'
import { useState,useEffect } from 'react'


// useEffect(() => {
//   fetch('https://api.github.com/users/zaidmirza24').then(
//     (res)=> res.json()
//   ).then(
//     (response)=>{}
//   )
// }, [])

const Github = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/zaidmirza24').then(
            (res)=> res.json()
          ).then(
            (response)=>{
                setData(response)
                console.log(response.followers)
            }
          )
    }, [])
  return (
    <>
    <div className='flex'>
    <img src={Data.avatar_url} alt="" width={250}/>
    <div className=' flex flex-col gap-4'>
    <div className='text-center text-3xl'>Github User: {Data.login} </div>
    <p className='text-center text-3xl'>
        BIO: {Data.bio}
    </p>
    </div>
    </div>
    </>
  )
}

export default Github