import Head from 'next/head';
import { useRouter } from 'next/router';
import { Header } from '../../src/components/Header';

export default function Settings() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Teats | { id }</title>
      </Head>

      <Header
        text={`Olá, ${id}`}
      ></Header>
    </div>
  );
}