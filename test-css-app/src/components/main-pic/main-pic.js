import React from 'react';

import './main-pic.scss';
import logo from '../images/logo-small.png';

const MainPic = () => {
    return (
        <div>
            <img className="main-picture" src={logo} />
        </div>
    );
};

export default MainPic;