import React, { useState } from 'react';
import homeicon from "../../asset/image/instalogo.jpg";
import dummyicon from "../../asset/image/javascript.png";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="sidebar-main">
      <img src={homeicon} className="homelog" alt="home icon" />
      <div className="sidebar-menu">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            <img src={dummyicon} alt="" className="icon" />
          </div>
        ))}
      </div>
      <img src={dummyicon} className="logout" alt="logout icon" />
    </div>
  );
}

export default SideBar;
