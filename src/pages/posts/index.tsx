import Header from "src/components/structure/header";
import Main from "src/components/structure/main";
import Footer from "src/components/structure/footer";
import Post from "src/components/structure/main/post";

import styles from "./index.module.scss";

import { getSortedPostsData } from "src/markdown";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Posts({ allPostsData }) {
  return (
    <>
      <Header />
      <Main classe={styles.l_posts}>
        {allPostsData.map(({ id, title, date, desc }) => {
          return (
            <Post title={title} date={date} id={id} key={id}>
              {desc}
            </Post>
          );
        })}
      </Main>
      <Footer />
    </>
  );
}
