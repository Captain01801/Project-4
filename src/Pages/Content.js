import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Content = () => {
    return (
      <div className="Page">
      
        <div className="content-nav">
          <Link to="/Content/About">About</Link>
        </div>

        <div>
        <Outlet />
        </div>

      </div>
    )
  }
    
  export default Content