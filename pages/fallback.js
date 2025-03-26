import { useEffect } from 'react';

export default function Fallback() {
  useEffect(() => {
    // Перенаправляем на основной маршрут
    window.location.href = '/';
  }, []);
  
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Inter, sans-serif',
      color: '#6366f1'
    }}>
      <div style={{
        fontSize: '24px',
        marginBottom: '16px'
      }}>
        Загрузка...
      </div>
      <div style={{
        width: '50px',
        height: '50px',
        border: '5px solid #f3f3f3',
        borderTop: '5px solid #6366f1',
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