import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello Nextjs !</h1>

        <Link href="/posts/first-post">Primeiro post</Link>
      </main>
    </div>
  );
}
