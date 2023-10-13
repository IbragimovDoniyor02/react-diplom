import React from 'react';

function WelcomeUser({ username }) {
  return (
    <div>
      <h2>Добро пожаловать, {username}!</h2>
      <p>Добро пожаловать на наш сайт про футбол. Здесь вы найдете последние новости, расписание матчей и многое другое.</p>
      {/* Дополнительный код для отображения информации о пользователе */}
    </div>
  );
}

export default WelcomeUser;
