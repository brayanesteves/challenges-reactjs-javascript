import React    from 'react';
import { Link } from 'react-router-dom';

export function NavigationJuanJoseOrtiz({ user }) {
    return (
      <nav>
        <ul>
          <li><Link to="/juanjoseortiz/rendererlist">Renderer List</Link></li>
        </ul>
      </nav>
    );
  }