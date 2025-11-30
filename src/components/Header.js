import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">🤖</div> 
            <div className="logo-text">
              <h1>铁路测量机器人</h1>
              <p>保障安全 · 自主可控 · 绿色高效</p>
            </div>
          </div>
          <div className="header-actions">
            {/* <button className="contact-btn">
              <span>📞</span>
              联系我们
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
