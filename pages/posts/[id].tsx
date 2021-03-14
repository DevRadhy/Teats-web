import Head from 'next/head';

import { getAllPostIds, getPostData } from '../../src/lib/posts';

import styles from '../../src/styles/pages/posts/Post.module.css';

export default function Post({ postData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1>{postData.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
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
