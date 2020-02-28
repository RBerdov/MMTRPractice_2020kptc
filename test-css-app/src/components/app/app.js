import React from 'react';

import './app.scss';

import MainLabel from '../main-label/main-label';
import MainPic from '../main-pic/main-pic';

const App = () => {
    return (
        <div className="main">
            <MainLabel />
            <MainPic /> 
        </div>
    );
   
    

};

export default App;