import React, { useState, useEffect } from 'react';

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = 'text',
  name,
  value = '',
  onChange,
  error,
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const applyMask = (value: string): string => {
    // Remove todos os caracteres não numéricos
    let numericValue = value.replace(/\D/g, '');
    
    switch (name.toLowerCase()) {
      case 'telefone':
        // Limita a 11 dígitos (DDD + 9 dígitos)
        numericValue = numericValue.slice(0, 11);
        
        // Formato: (99) 99999-9999
        const ddd = numericValue.slice(0, 2);
        const telPart1 = numericValue.slice(2, 7);
        const telPart2 = numericValue.slice(7, 11);
        
        let telValue = '';
        if (ddd) telValue += `(${ddd}`;
        if (telPart1) telValue += `) ${telPart1}`;
        if (telPart2) telValue += `-${telPart2}`;
        
        return telValue;
        
      case 'cpf':
        // Limita a 11 dígitos
        numericValue = numericValue.slice(0, 11);
        
        // Formato: 999.999.999-99
        const cpfPart1 = numericValue.slice(0, 3);
        const cpfPart2 = numericValue.slice(3, 6);
        const cpfPart3 = numericValue.slice(6, 9);
        const cpfPart4 = numericValue.slice(9, 11);
        
        let cpfValue = '';
        if (cpfPart1) cpfValue += `${cpfPart1}`;
        if (cpfPart2) cpfValue += `.${cpfPart2}`;
        if (cpfPart3) cpfValue += `.${cpfPart3}`;
        if (cpfPart4) cpfValue += `-${cpfPart4}`;
        
        return cpfValue;
        
      default:
        return value;
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const fieldName = e.target.name.toLowerCase();
    
    if (fieldName === 'telefone' || fieldName === 'cpf') {
      // Aplica máscara para telefone ou CPF
      const maskedValue = applyMask(rawValue);
      setInputValue(maskedValue);
      
      // Cria um novo evento com o valor mascarado
      const newEvent = {
        ...e,
        target: {
          ...e.target,
          value: maskedValue
        }
      } as React.ChangeEvent<HTMLInputElement>;
      
      if (onChange) {
        onChange(newEvent);
      }
    } else {
      // Para outros campos, não aplica máscara
      setInputValue(rawValue);
      if (onChange) {
        onChange(e);
      }
    }
  };
  
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label mb-1">
        {label}
      </label>
      <input
        type={type}
        className={`form-control form-control-sm ${error ? 'is-invalid' : ''}`}
        id={name}
        name={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default InputField;
