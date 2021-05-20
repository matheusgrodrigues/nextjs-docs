import Head from "next/head";
import Link from "next/link";

import styles from "./index.module.scss";

// Template parts
import Header from "../template-parts/header";
import Menu from "../template-parts/header/components/menu";
import Main from "../template-parts/main";
import Footer from "../template-parts/footer";

// Paginas
import Welcome from "pages/welcome";

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
