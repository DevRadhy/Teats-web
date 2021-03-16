import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Header } from '../src/components/Header';

import styles from '../src/styles/pages/Starting.module.css';

export default function Starting() {
  const [preference, setPreferece] = useState("");
  const router = useRouter();

  useEffect(() => {
    const preferenceExists = localStorage.getItem('preference');
    
    if(!preferenceExists) {
      localStorage.setItem("preference", preference);
    }

    router.push('/');
  }, [preference]);

  function setPreferenceHandler(props: string) {
    setPreferece(props);
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Teats | Começando</title>
      </Head>

      <Header
        text="Chegou o grande momento, o momento que a fome fala mais alto. Vai querer o que, Pedir AQUELEEEE lanche, porção ou sobremesia, ou quem sabe um grande combo com tudo junto, que problema tem nisso =). Ou quer se juntar a nós para levar alegria embalada em uma caixinha <3."
        smallText="Escolha uma das opções abaixo para continuar."
      />

      <article>
        <button
          type="button"
          onClick={() => setPreferenceHandler("pedir")}

        >
          <Link href="/" replace>
            <a>
              <img src="/icons/pizza.svg" alt="Pizza" />
              <span>Pedir</span>
            </a>
          </Link>
        </button>

        <button
          type="button"
          onClick={() => setPreferenceHandler("entregar")}
        >
          <Link href="/" replace >
            <a>
              <img src="/icons/fast-food.svg" alt="Fast Food" />
              <span>Entregar</span>
            </a>
          </Link>
        </button>
      </article>

      <footer>
        <span>Made with</span>
        <img src="/icons/heart.svg" alt="Coração/Amor"/>
        <span>Lucas</span>
      </footer>
    </div>
  );
}