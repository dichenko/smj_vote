import { useEffect } from 'react';

export default function Fallback() {
  useEffect(() => {
    // Перенаправляем на главную страницу
    window.location.href = '/';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h2>Перенаправление на главную страницу...</h2>
      <div style={{
        marginTop: '20px',
        width: '40px',
        height: '40px',
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #1e88e5',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
} 