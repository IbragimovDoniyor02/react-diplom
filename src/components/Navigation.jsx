import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/statistics">Статистика</Link>
        </li>
        <li>
          <Link to="/players">Игроки</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
