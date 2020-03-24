import React, {Component} from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="navbar_container">
      <p>Excer tracker</p>
      <p>
        <Link to="/">Exercices</Link>
      </p>
      <p>
        <Link to="/create">Create exercice logs</Link>
      </p>
      <p>
        <Link to="/">Create User</Link>
      </p>
    </div>
  );
};
