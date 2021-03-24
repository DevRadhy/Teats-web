import Head from 'next/head';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import { getAllPostIds, getPostData } from '../../lib/posts';

import styles from '../../styles/pages/posts/Post.module.css';

export default function Post({ postData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Teats | {postData.title}</title>
      </Head>

      <Header
        text="Obrigado pela sua atenção em querer saber quem somos e como chegamos aqui, fico feliz em ver você prestes a conhecer nossa história =)"
        smallText="Se você achou algo diference um algumas página continue lendo"
      />

      <h1 className={styles.title}>{postData.title}</h1>
      
      <main>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData
    }
  }
}
