import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../components/layout.module.scss";

const firstPost = () => {
  return (
    <Layout>
      <Head>
        <title>Pagina do post</title>
      </Head>

      <div className={styles.container}>
        <Image
          src="/images/profile.jpg"
          width="1920"
          height="500"
          alt="Component Image Next"
        ></Image>
        <Link href="/">Voltar para a pagina inicial</Link>
      </div>
    </Layout>
  );
};

export default firstPost;
