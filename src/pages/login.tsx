import { signIn, useSession } from 'next-auth/client';
import Head from 'next/head';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
  const [session, loading] = useSession();

  return (
    <div className={styles.container} >
      <Head>
        <title>Teats | Login</title>
      </Head>

      <header>
        <img src="/background.jpg" alt="Pequenique" />
        <img src="/favicon-light.png" alt="Teats Logo"/>
      </header>

      <section>
        <span>Not Sign In</span>

        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
        >
          <div>
            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
          </div>

          <p><strong>Continue com o Google</strong></p>
        </button>

        <button onClick={() => signIn('facebook', { callbackUrl: '/' })}>Continue com o Facebook</button>
      </section>
    </div>
  );
}