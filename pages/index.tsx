import Head from "next/head";
import Link from "next/link";

// Template parts
import Header from "../template-parts/header";
import Menu from "../components/menu";
import Main from "../template-parts/main";

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
            <Link href="/posts">Posts</Link>
          </li>
        </Menu>

        <Main containerClass="container">
          <Link href="/posts/first-post"> Primeiro post </Link>
        </Main>
      </Header>
    </>
  );
}
