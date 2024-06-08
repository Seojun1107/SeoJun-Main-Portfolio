import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const UiRight = () => {
  const location = useLocation();

  useEffect(() => {
    const navs = document.querySelectorAll('.nav');
    navs.forEach((nav, index) => {
      nav.classList.remove('navHighlight');
      if (index === 0 && location.pathname === '/') {
        nav.classList.add('navHighlight');
      } else if (index === 1 && location.pathname === '/about') {
        nav.classList.add('navHighlight');
      } else if (index === 2 && location.pathname === '/project') {
        nav.classList.add('navHighlight');
      }
    });
  }, [location]);

  return (
    <nav className="noDrag ui ui_right">
      <div className="nav navHighlight">
        <NavLink to="/">Home</NavLink>
        <div className="navLine"></div>
      </div>
      <div className="nav">
        <NavLink to="/about">About</NavLink>
        <div className="navLine"></div>
      </div>
      <div className="nav" style={{ marginBottom: '70px' }}>
        <NavLink to="/project">Project</NavLink>
        <div className="navLine"></div>
      </div>
    </nav>
  );
};

export default UiRight;
