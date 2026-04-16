import React from 'react'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

function NavBar() {
  return (
    <>
      <div className="navbar">
        <div id="logo">
            <h1>ResQFast</h1>
        </div>

        <div className="nav-btns">
          <Link className="nav-btn" to="/" style={{ textDecoration: "none" }}> <Button variant="outlined" >Home</Button> </Link>
          <Link className="nav-btn" to="/track" style={{ textDecoration: "none" }}> <Button variant="outlined" color="error">Track</Button> </Link>
          <Link className="nav-btn" to="/admin" style={{ textDecoration: "none" }}> <Button variant="outlined" color="success">Admin</Button> </Link>
        </div>
      </div>
    </>
  )
}

export default NavBar