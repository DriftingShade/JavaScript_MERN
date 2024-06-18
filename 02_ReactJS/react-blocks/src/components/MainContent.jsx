import React from 'react';
import Subcontent from './Subcontent';
import Advertisement from './Advertisement';

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="subcontent"><Subcontent /></div>
            <div className="subcontent"><Subcontent /></div>
            <div className="subcontent"><Subcontent /></div>
            <Advertisement />
        </div>
    );
};

export default MainContent;
