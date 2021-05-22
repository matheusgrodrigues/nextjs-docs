import Head from "next/head";

import styles from "./index.module.scss";

interface IPost {
  title: string;
  children: any;
}

export default function Post({ children, title }: IPost) {
  return (
    <>
      <Head>
        <title>Next.js - Blog: Posts</title>
      </Head>

      <div className={styles.c_post}>
        <h1 className={styles.c_post__title}>{title}</h1>
        <p className={styles.c_post__description}>{children}</p>
      </div>
    </>
  );
}
