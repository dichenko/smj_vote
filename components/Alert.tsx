import React from 'react';

interface AlertProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
  return (
    <div className={`alert alert-${type}`}>
      {message}
    </div>
  );
};

export default Alert; 