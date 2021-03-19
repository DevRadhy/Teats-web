import { ReactNode, SelectHTMLAttributes } from "react";

import styles from '../styles/components/Select.module.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  children: ReactNode;
}

export function Select({ label, name, children, ...rest }: SelectProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <select defaultValue="0" id={name} {...rest} >
        {children}
      </select>
    </div>
  );
}