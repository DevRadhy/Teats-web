import { TextareaHTMLAttributes } from "react";

import styles from '../styles/components/Textarea.module.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

export function Textarea({ label, name, ...rest }: TextareaProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <textarea  id={name} cols={30} rows={10} {...rest} />
    </div>
  );
}