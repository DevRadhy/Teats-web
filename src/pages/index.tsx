import Head from 'next/head';
import { FoodCard } from '../components/FoodCard';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import styles from '../src/styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Teats | Início</title>
      </Head>

      <Header
        text="Encontre um lugar incrível para te satisfazer, e depois o que acha de nos contar como foi? Espero que seja incrível, até logo =)"
      >
        <section>
          <select id="category" defaultValue="0">
            <option value="0" disabled>Selecione um categoria</option>
            <option value="1">Lanches</option>
            <option value="2">Porções</option>
            <option value="3">Sobremesas</option>
            <option value="4">Combos</option>
          </select>

          <select id="payment" defaultValue="0">
            <option value="0" disabled>Selecione um meio de pagamento</option>
            <option value="1">Cartão</option>
            <option value="2">Dinheiro</option>
            <option value="3">PIX</option>
            <option value="4">Ambos</option>
          </select>
        </section>
      </Header>

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

       <Footer />
    </div>
  );
}
