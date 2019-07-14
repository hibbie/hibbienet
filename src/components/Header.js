import React from 'react'

import logo from '../assets/images/llama.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img style={{width: '145px'}} src={logo} alt="" /></span>
        <h1>Thomas Hibbard</h1>
        <p>Web developer specializing in Python and JavaScript</p>
    </header>
)

export default Header
