import { signIn, useSession } from 'next-auth/client';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
  const [session, loading] = useSession();

  return (
    <div className={styles.container} >
      <header>
        <img src="/background.jpg" alt="Pequenique" />
        <img src="/favicon-light.png" alt="Teats Logo"/>
      </header>

      <section>
        { !session &&
          <>
            <span>Not Sign In</span>

            <button
              onClick={() => signIn('google', { callbackUrl: '/' })}
            >
              <div>
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
              </div>

              <p><strong>Continue com o Google</strong></p>
            </button>

            <button>Continue com o Facebook</button>
          </>
        }
      </section>
    </div>
  );
}