import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import siteLogo from '../../Image/siteLogo.png'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark  ">
                <Link to="/AnimeWorld" className="navbar-brand  m-auto " ><img src={siteLogo} className='logo ' alt='site-logo' /></Link>
            </nav>
        </>
    )
}

export default Header
