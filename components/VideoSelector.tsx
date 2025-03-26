import React from 'react';

interface VideoSelectorProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  disabled: boolean;
  selectedValues: number[];
}

const VideoSelector: React.FC<VideoSelectorProps> = ({
  id,
  label,
  value,
  onChange,
  disabled,
  selectedValues
}) => {
  // Создаем массив чисел от 1 до 10
  const options = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="relative mb-4">
      <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value || ''}
          onChange={(e) => onChange(parseInt(e.target.value, 10))}
          disabled={disabled}
          className="block w-full py-3 px-4 bg-white text-gray-700 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 disabled:bg-gray-100"
        >
          <option value="">Выберите номер ролика</option>
          {options.map((num) => (
            <option 
              key={num} 
              value={num}
              disabled={value !== num && selectedValues.includes(num)}
            >
              {num}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VideoSelector; 