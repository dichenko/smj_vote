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
    <div className="mb-4">
      <label htmlFor={id} className="block text-white font-medium mb-2">
        {label}
      </label>
      <select
        id={id}
        value={value || ''}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        disabled={disabled}
        className="w-full py-2 px-3 bg-white text-gray-800 rounded-md border-2 border-[#ff5db7] focus:outline-none focus:ring-2 focus:ring-[#346cdb]"
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