import Head from 'next/head';
import { useRouter } from 'next/router';
import { Header } from '../../components/Header';
import { FoodCard } from '../../components/FoodCard';
import { Footer } from '../../components/Footer';

import styles from '../../styles/pages/users/Settings.module.css';
import { useState } from 'react';

export default function Settings() {
  const router = useRouter();
  const { id } = router.query;

  const [filterIsVisible, setFilterIsVisible] = useState(false);
  const [select, setSelect] = useState('0');

  function setFilterVisibilityHandler() {
    setFilterIsVisible(!filterIsVisible);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Teats | { id }</title>
      </Head>

      <header>
        <Header
          text="Aqui você está no controle, CUIDADO! Essa Página tem Poderes de Super Vaca."
          smallText="MOOOOO..."
        >
          <img className={styles.profileImage} src="https://github.com/DevRadhy.png" alt="Profile"/>
          <section
            className={styles.filterContainer}
          >
            <img
              className={styles.filter}
              src="/icons/filter.svg" alt="Filter"
              onClick={setFilterVisibilityHandler}
            />

            { filterIsVisible &&
              <select
                value={select}
                onChange={(e) => setSelect(e.target.value)}
              >
                <option value="0">Todos</option>
                <option value="1">Lanches</option>
                <option value="2">Porções</option>
                <option value="3">Sobremesas</option>
              </select>
            }

          </section>
        </Header>
      </header>

      <button
        type="button"
        aria-label="Adicionar produtos"
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.5 12.5V47.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M15 30H50" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>

      <section>
        <div className={styles.gridContainer}>
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}