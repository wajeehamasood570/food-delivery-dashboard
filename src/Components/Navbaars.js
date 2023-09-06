import React from 'react'
import { Link } from 'react-router-dom'

const Navbaars = () => {
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/dashboard/*">Dashboard</Link>
    </>
  )
}

export default Navbaars