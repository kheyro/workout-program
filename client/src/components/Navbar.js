import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/programs">Programs List</Link>
      <Link to="/programs/new">New Programs</Link>
    </div>
  );
};

export default Navbar;