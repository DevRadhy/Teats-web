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
        <img src="/background.jpg" alt="Picnic" />
        <img src="/favicon-light.png" alt="Teats Logo"/>
      </header>

      <section>
        <span>Not Sign In</span>

        <button
          onClick={() => signIn('google', {callbackUrl: '/'})}
        >
          <img src="/icons/google.svg" alt="Google"/>
          Fazer login com o Google
        </button>

        <button
          onClick={() => signIn('facebook', { callbackUrl: '/' })}
        >
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/szGrb_tkxMW.png" alt="Facebook"/>
          
          <span>Continue com o Facebook</span>
        </button>
      </section>
    </div>
  );
}