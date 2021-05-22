import Head from "next/head";
import Link from "next/link";

import styles from "./index.module.scss";

// Componentes estruturais
import Header from "../components/structure/header";
import Menu from "../components/structure/header/components/menu";
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

      <Header>
        <Menu>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </Menu>
      </Header>

      <Main>
        <Welcome />
      </Main>

      <Footer>
        <p>
          Nextjs - Blog. todos os direitos reservados{" "}
          <a href="https://github.com/MatheusGomesWeb" target="blank">
            Matheus Gomes
          </a>
        </p>
      </Footer>
    </div>
  );
}
