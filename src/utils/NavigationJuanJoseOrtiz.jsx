import React    from 'react';
import { Link } from 'react-router-dom';

export function NavigationJuanJoseOrtiz({ user }) {
    return (
      <nav>
        <ul>
          <li><Link to="/juanjoseortiz/rendererlist">Renderer List</Link></li>
          <li><Link to="/juanjoseortiz/renderer-list-user-jsonplaceholder">Renderer List [User] - JSON Placeholder (API)</Link></li>
          <li><Link to="/juanjoseortiz/form-register">Form Register</Link></li>
        </ul>
      </nav>
    );
  }