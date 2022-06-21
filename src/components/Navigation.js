import React from 'react'
import styled from 'styled-components'
import {style} from '../helpers/helpers'
import {Link, useLocation} from "react-router-dom"


export default function Navigation() {
    const items = [
        {
            name:"Emily",
            slug:"/",
            id: 1,
        },
        {
            name:"Steve",
            slug:"/Steve",
            id: 2,
        },
        {
            name:"Ellon",
            slug:"/Ellon",
            id: 3,
        }
    ]
    let currentPage = useLocation();
    console.log(currentPage.pathname);
    let bgColor = "";
    if (currentPage.pathname == "/") {
        bgColor="red";
    } else if (currentPage.pathname == "/Steve") {
        bgColor="purple";
    } else {
        bgColor="yellow"
    }
  return (
    <header style={{backgroundColor:bgColor}}>
        <Nav>
            <div className='logo'>
                <Link to="/">
                    <h1>devMito.</h1>
                </Link>
            </div>
            <div className='navItems'>
                <ul>
                    {
                        items.map((item)=> (
                        <Link to={item.slug} key={item.id}>
                            <li>{item.name}</li>
                        </Link>
                        ))
                    }
                </ul>
            </div>
        </Nav>
    </header>
  )
}

const Nav = styled.nav`
display : flex;
justify-content : space-between;
align-items: center;
padding-left: 40px;
padding-right: 40px;
/* background-color: ${style.backgroundColor}; */
font-size: ${style.fontSize};
color: ${style.color};


a {
    text-decoration: none;
    color: #fff;
}

ul {
    display : flex;
    gap : 1.5rem;

    li {
        list-style: none;
        padding-right : 10px;
    }
}

`

