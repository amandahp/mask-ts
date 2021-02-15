import React, {InputHTMLAttributes} from 'react'

import {cep, currency, cpf} from './mask/mask'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: "cep" | "currency" | "cpf";
  prefix?: string;
  handleKeyUp: () => number;
  
};

const Input: React.FC<InputProps> = ({mask, prefix, handleKeyUp, ...props}) => {
  return (
    <div>
      {prefix && <span>{prefix}</span>}
      <input
        {...props}
        onKeyUp={handleKeyUp} 
      />
    </div>

  )
};

export default Input 