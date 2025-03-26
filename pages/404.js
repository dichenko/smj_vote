import React from 'react';

export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1>404 - Страница не найдена</h1>
      <p>Извините, запрашиваемая страница не существует.</p>
      <a href="/" style={{ 
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#1e88e5',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px'
      }}>
        Вернуться на главную
      </a>
    </div>
  );
} 