import { InputHTMLAttributes } from 'react';

import styles from '../styles/components/Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export function Input({ label, name, ...rest }: InputProps) {
  return (
    <div className={styles.container}>
        <label htmlFor={name}>{label}</label>
        <input  id={name} {...rest} />
    </div>
  );
}