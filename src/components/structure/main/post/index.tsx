import Head from "next/head";
import Link from "next/link";

import styles from "./index.module.scss";

interface IPost {
  title: string;
  date: string;
  id: Number;
  children: any;
}

export default function Post({ children, title, date, id }: IPost) {
  return (
    <>
      <Head>
        <title>Next.js - Blog: Posts</title>
      </Head>

      <div className={styles.c_post}>
        <h1 className={styles.c_post__title}>
          <Link href={`/posts/${id}`}>{title}</Link>
          <span className={styles.c_post__date}> {date}</span>
        </h1>

        <div className={styles.c_post__description}>{children}</div>
      </div>
    </>
  );
}
