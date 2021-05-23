import Link from "next/link";

import Header from "src/components/structure/header";
import Main from "src/components/structure/main";
import Footer from "src/components/structure/footer";
import Post from "src/components/structure/main/post";

import styles from "./index.module.scss";

import { getAllPostIds, getPostData } from "src/markdown";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

const PostDinamico = ({ postData }) => {
  return (
    <>
      <Header />
      <Main classe={styles.l_posts}>
        <Post title={postData.title} date={postData.date} id={postData.id}>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Post>

        <div className={styles.l_posts__voltar}>
          <Link href="/posts">Voltar</Link>
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default PostDinamico;
