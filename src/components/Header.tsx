import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/client';

import styles from '../styles/components/Header.module.css';

interface HeaderProps {
  text: string;
  smallText?: string;
  children?: ReactNode;
}

export function Header({ text, smallText, children }: HeaderProps) {
  const [dropded, setDropded] = useState(false);

  function setDropdedHandler() {
    setDropded(!dropded);
  }

  function dropdownHandler() {
    window.onclick = function(e) {
      if(!e.target.matches('.menu')) {
        setDropded(false);
      }
    }
  }

  return (
    <div className={styles.container}>
      <header>
        <Link href="/" >
          <a><img src="/favicon-light.png" alt="Teats Logo"/></a>
        </Link>

        <img
          src="https://github.com/DevRadhy.png"
          alt="Profile Image"
          onClick={() => {
            dropdownHandler()
            setDropdedHandler()
          }}
          className="menu"
        />
        { dropded &&
          <div className="menu">
            <ul>
              <li>Configurações de Usuário</li>
              <li>Configuraçôes de Feeder</li>
              <li>Configurações de Produtos</li>
            </ul>
            <span
              onClick={() => signOut({ callbackUrl: '/login', redirect: true })}
            >
              Encerrar Sessão
            </span>
          </div>
        }
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