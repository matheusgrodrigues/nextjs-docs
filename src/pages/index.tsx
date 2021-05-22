import Head from "next/head";

// Componentes estruturais
import Header from "../components/structure/header";
import Footer from "../components/structure/footer";

// Paginas
import Welcome from "src/pages/welcome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js - Blog </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Welcome />
      <Footer />
    </>
  );
}
