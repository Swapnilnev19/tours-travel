import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/logo.svg"

function Header () {
  return (
    <>
        <div className='header'>
            <div className='container'>
                <div className='flex-wrap'>
                    <div className='logo'>
                        <Link to="/">
                            <img src={Logo} alt='' width={100} height={60}/> 
                        </Link>
                    </div>
                    <div className='navigations'>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">About</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='login-signup'>
                        <Link to="/login">Login</Link>
                        <Link href='#' className='active'>signup</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header
