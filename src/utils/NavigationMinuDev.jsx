import React    from 'react';
import { Link } from 'react-router-dom';

export function NavigationMinuDev({ user }) {
    return (
      <nav>
        <ul>
          <li><Link to="/minudevs/catshome">Cats Home</Link></li>
        </ul>
      </nav>
    );
  }