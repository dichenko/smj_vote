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
    <div className="select-wrapper">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={value || ''}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        disabled={disabled}
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
    </div>
  );
};

export default VideoSelector; 