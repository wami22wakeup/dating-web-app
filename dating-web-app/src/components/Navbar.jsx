import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className=" nav-left">
                <img className="icon" src="icon.png" alt="icon" />
                <h1 className="site-title">Pragma</h1>
            </div>

            <div className="nav-right">
                <button className='btn' >Login</button>
            </div>
        </nav>
    )
}

export default Navbar