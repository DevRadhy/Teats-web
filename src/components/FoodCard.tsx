import styles from '../styles/components/FoodCard.module.css';

export function FoodCard() {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div>
          <img src="https://images.unsplash.com/photo-1607290817806-e93c813ff329?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=320&q=50" alt="Food"/>
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