import React    from 'react';
import { Link } from 'react-router-dom';

export function Navigation({ user }) {
    return (
      <nav>
        <ul>
          <li><Link to="/landing">Landing</Link></li>
          {user ? (<li><Link to="/home">Home</Link></li>) : (<></>)}
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </nav>
    );
  }