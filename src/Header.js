import React from 'react';
import Checkout from './Checkout/Checkout';
import Logo from './Logo/Logo';
import Menu from './Menu';



function Header(props) {
    return (
        <div className="header">
            <Logo/>
            <Menu/>
            <Checkout database={props.database}/>
            <a href="/#" className="logout">Выход</a>
        </div>
    );
}

export default Header;