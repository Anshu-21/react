import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
const {id}= useParams()
  return (
    <div className='bg-gray-900 text-white flex justify-center align-middle text-3xl'>User: {id} </div>
  )
}

export default User