import { signIn, signOut, useSession } from 'next-auth/client';

import styles from '../src/styles/pages/Login.module.css';

export default function Login() {
  const [session, loading] = useSession();

  return (
    <div className={styles.container} >
      <header>
        <img src="/background.jpg" alt="Piquenique"/>
        <img src="/favicon-light.png" alt="Teats Logo"/>
      </header>

      <section>
      {!session &&
      <>
        Not signed in <br/>
        <button onClick={() => signIn("Facebook")}>Sign in</button>
      </>}

      {session &&
      <>
        Signed in as {session.user.name} <br/>
        <button onClick={() => signOut()}>Sign out</button>
      </>}
      </section>
    </div>
  );
}