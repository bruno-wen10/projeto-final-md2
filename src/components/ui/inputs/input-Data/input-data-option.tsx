import { ChangeEvent, useState } from 'react';

import { Label, Select } from './inputs-edit-datas-styled';



// Interface e tipos
interface DivProps {
  inputWidth: string;
  inputHeight: string;
}

// Interface e tipos
interface InputProps {
  label: string;
  id: string;
  isLarge: boolean;
  options: string[]; // Opções vindas da API
  onChange: (value: string) => void; // Função para manipular alterações
}


export const InputsDatasOption: React.FC<InputProps> = ({ label, id, isLarge, options, onChange }) => {
  const inputStyles: DivProps = {
    inputWidth: isLarge ? '400px' : '20vw',
    inputHeight: isLarge ? '150px' : '40px',
  };

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
    onChange(value); // Chamar a função onChange passada como prop
  };


  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Select
        inputWidth={inputStyles.inputWidth}
        inputHeight={inputStyles.inputHeight}
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Select>

    </div>
  );
};

export default InputsDatasOption;
