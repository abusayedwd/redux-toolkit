import React, { useState } from 'react';
import './Tabs.css';  // Create a CSS file for styling
import PostsData from './PostsData';
import UsersData from './UsersData';
import Photos from './Photos';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        <button
          className={activeTab === 'Tab1' ? 'active' : ''}
          onClick={() => handleTabClick('Tab1')}
        >
         Post data
        </button>
        <button
          className={activeTab === 'Tab2' ? 'active' : ''}
          onClick={() => handleTabClick('Tab2')}
        >
          Usersdata
        </button>
        <button
          className={activeTab === 'Tab3' ? 'active' : ''}
          onClick={() => handleTabClick('Tab3')}
        >
          PhotosData
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'Tab1' && <div><PostsData></PostsData></div>}
        {activeTab === 'Tab2' && 
              <div>
            <UsersData></UsersData>
             </div>}
        {activeTab === 'Tab3' && <div>
             <Photos></Photos>
            </div>}
      </div>
    </div>
  );
};

export default Tabs;
