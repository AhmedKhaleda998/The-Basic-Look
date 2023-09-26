import React from 'react'
import { useNavigate } from 'react-router-dom'
const Cancel = () => {
    const navigate = useNavigate();
  return (
    <div><p className='text-center fw-bold'>Order Canceled</p>
    <button className='btn btn-dark btn-lg' onClick={()=>navigate('/')}>Go Home</button></div>
  )
}

export default Cancel