import Head from 'next/head';

import { getAllPostIds, getPostData } from '../../src/lib/posts';

import styles from '../../src/styles/pages/posts/Post.module.css';

export default function Post({ postData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <h1 className={styles.title}>{postData.title}</h1>
      
      <img src="/favicon.png" alt="Teats Logo"/>

      <main>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </main>
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
