import Head from "next/head";
import Link from "next/link";

// Template parts
import Header from "../template-parts/header";
import Menu from "../template-parts/header/components/menu";
import Main from "../template-parts/main";
import Footer from "../template-parts/footer";

export default function Home() {
  return (
    <>
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
        <Link href="/posts/first-post"> Primeiro post </Link>
      </Main>

      <Footer>
        <p>Todos os direitos reservados</p>
      </Footer>
    </>
  );
}
