import React, { ButtonHTMLAttributes } from 'react';
import { button } from './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`${button} ${className || ''}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
