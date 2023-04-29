import React from 'react';
import { Link,NavLink } from 'react-router-dom';

function Navs() {
    return (
        <ul className="topnav">
            <li><a className="active" href="#home">Shopping Cart</a></li>
            <li className="right"><NavLink to="/cart">Cart Page</NavLink></li>
            <li className="right"><NavLink to="/">Home Page</NavLink></li>
            
        </ul>
    )
}

export default Navs