import React, { useEffect } from 'react';

interface AlertProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

const Alert: React.FC<AlertProps> = ({
  message,
  type,
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const bgColor = type === 'success' ? 'bg-[#346cdb]' : 'bg-[#ff5db7]';

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center p-4 z-50">
      <div
        className={`${bgColor} text-[#ffffff] px-6 py-3 rounded-md shadow-lg max-w-md text-center animate-fade-in`}
      >
        {message}
      </div>
    </div>
  );
};

export default Alert; 