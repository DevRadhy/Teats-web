import { SelectHTMLAttributes } from "react";

import styles from '../styles/components/Select.module.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: number;
    label: string;
  }>
}

export function Select({ label, name, options, ...rest }: SelectProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest} >
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>{option.label}</option>
          );
        })}
      </select>
    </div>
  );
}