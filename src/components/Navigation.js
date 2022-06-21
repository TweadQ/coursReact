import React from 'react'
import styled from 'styled-components'
import {style} from '../helpers/helpers'
import { Link } from "react-router-dom"


export default function Navigation() {
  return (
    <Nav>
        <div className='logo'>
            <h1>devMito.</h1>
        </div>
        <div className='navItems'>
            <ul>
                <Link to="/">
                    <li>Emily</li>
                </Link>
                <Link to="/Steve">
                    <li>Steve</li>
                </Link>
                <Link to="/Ellon">
                    <li>Ellon</li>
                </Link>
            </ul>
        </div>
    </Nav>
  )
}

const Nav = styled.nav`
display : flex;
justify-content : space-between;
align-items: center;
padding-left: 40px;
padding-right: 40px;
background-color: ${style.backgroundColor};
font-size: ${style.fontSize};
color: ${style.color};


ul {
    display : flex;
    gap : 1.5rem;

    li {
        list-style: none;
        padding-right : 10px;
    }
}
`