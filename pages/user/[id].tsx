import Head from 'next/head';
import { useRouter } from 'next/router';
import { FoodCard } from '../../src/components/FoodCard';

import styles from '../../src/styles/pages/Settings.module.css';

export default function Settings() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Teats | { id }</title>
      </Head>

      <header>
        <article><img src="/icons/arrow-left.svg" alt="Arrow left"/></article>

        <p>Aqui você está no controle, CUIDADO! essa página tem Poderes de Super Vaca.</p>

        <img src="https://github.com/DevRadhy.png" alt="Profile"/>

        <span>MOOOO...</span>

        <article><img src="/icons/filter.svg" alt="Filter"/></article>
      </header>

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