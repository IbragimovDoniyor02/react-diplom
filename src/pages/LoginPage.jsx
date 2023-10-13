import React, { useState } from 'react';
import Header from '../components/Header';
import WelcomeUser from '../components/WelcomeUser';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';


export function LoginPage({ onLogin }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  }

  return (
    <div>
      <h2>Вход</h2>

      <form onSubmit={handleSubmit}>

        <label>
          Имя пользователя:
          <input 
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)} 
          />
        </label>

        <label>  
          Пароль:
          <input
            type="password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">Войти</button>

      </form>
    </div>
  );
}

export function HomePage({ user, onLogin }) {

  return (
    <div>

      <Header />

      {user ?
        <WelcomeUser />  
      :
        <LoginPage onLogin={onLogin} />
      }

      <MainContent />

      <Footer />

    </div>
  );
}




