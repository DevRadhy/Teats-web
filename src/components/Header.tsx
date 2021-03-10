import { ReactNode } from 'react';
import styles from '../styles/components/Header.module.css';

interface HeaderProps {
  text: string;
  smallText?: string;
  children?: ReactNode;
}

export function Header({ text, smallText, children }: HeaderProps) {
  return (
    <div className={styles.container}>
      <header>
        <img src="/favicon-light.png" alt="Teats Logo"/>

        <img src="https://github.com/DevRadhy.png" alt="Profile Image"/>
      </header>

        <p>{text}</p>

        {children}

        { smallText && 
          <footer>
          <p><small>{smallText}</small></p>
          </footer> }
    </div>
  );
}