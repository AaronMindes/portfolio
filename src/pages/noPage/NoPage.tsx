import React, { useEffect } from 'react'
import './noPage.scss'
import { useNavigate } from 'react-router-dom'

const NoPage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  })
  return (
    <div className='noPage-container'>
      <div title="404">404</div>
    </div>
  )
}

export default NoPage