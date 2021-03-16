import Head from 'next/head';
import { useRouter } from 'next/router';
import { Header } from '../../src/components/Header';
import { FoodCard } from '../../src/components/FoodCard';

import styles from '../../src/styles/pages/users/Settings.module.css';

export default function Settings() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Teats | { id }</title>
      </Head>

      <Header
        text="Aqui você está no controle, CUIDADO! Essa Página tem Poderes de Super Vaca."
        smallText="MOOOOO..."
      >
        <section>
          <img src="https://github.com/DevRadhy.png" alt="Profile"/>
          <img className={styles.filter} src="/icons/filter.svg" alt="Filter"/>
        </section>
      </Header>

      <button>
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
    </div>
  );
}