import React from 'react';
import HeaderPopup from "../components/header/headerPopup";
import HeaderPrimary from '../components/header/headerPrimary';

function Header() {
    return (
        <div>
        <HeaderPopup /> {/* Limited Offer PopUP on top */}
        <HeaderPrimary /> {/* // Primary Header  */}
        </div>
    );
}

export default Header;