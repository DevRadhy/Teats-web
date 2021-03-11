import styles from '../styles/components/FoodCard.module.css';

export function FoodCard() {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div>
          <img src="https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D.png" alt="Product"/>
        </div>

        <div>
          <header>
            <h1>Pizza</h1>

            <span>
              Oferecido por <br/>
              <strong>FeederPlace</strong>
            </span>
          </header>

          <main>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae ullam quasi! Sed natus et quod vero illum blanditiis?</p>
          </main>

          <footer>
            <span>R$20,00</span>

            <button type="button">
              <img src="/icons/logo-whatsapp.svg" alt="Icon Contact"/>
              Whatsapp
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}