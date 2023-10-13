import React from 'react';

function NewsList({ news }) {
  return (
    <div>
      <h2>Новости</h2>
      <ul>
        {news.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <span>{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;
