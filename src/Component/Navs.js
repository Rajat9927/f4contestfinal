import React from 'react';
import { Link,NavLink } from 'react-router-dom';

function Navs() {
    return (
        <ul className="topnav">
            <li><a className="active">Shopping Cart</a></li>
            <li className="right"><Link to="/cart">Cart Page</Link></li>
            <li className="right"><Link to="/">Home Page</Link></li>
            
        </ul>
    )
}

export default Navs