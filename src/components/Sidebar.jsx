import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/concepts">Concepts</Link></li>
        <li><Link to="/structures">Structures</Link></li>
        <li><Link to="/strategies">Strategies</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;