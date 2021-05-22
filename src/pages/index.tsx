import Head from "next/head";

import styles from "./index.module.scss";

// Componentes estruturais
import Header from "../components/structure/header";
import Main from "../components/structure/main";
import Footer from "../components/structure/footer";

// Paginas
import Welcome from "src/pages/welcome";

export default function Home() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Next.js - Blog </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>
        <Welcome />
      </Main>

      <Footer />
    </div>
  );
}
