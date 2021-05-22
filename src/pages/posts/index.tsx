import Header from "src/components/structure/header";
import Main from "src/components/structure/main";
import Footer from "src/components/structure/footer";
import Post from "src/components/structure/main/post";

import styles from "./index.module.scss";

export default function Posts() {
  return (
    <>
      <Header />
      <Main classe={styles.l_posts}>
        <Post title="Primeiro Post">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil
          adipisci eligendi ea voluptatum! Doloremque nemo ab, fugit consectetur
          totam impedit esse corporis ea itaque, voluptatibus, dolorem tempore
          libero perferendis?
        </Post>
        <Post title="Segundo Post">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil
          adipisci eligendi ea voluptatum! Doloremque nemo ab, fugit consectetur
          totam impedit esse corporis ea itaque, voluptatibus, dolorem tempore
          libero perferendis?
        </Post>
        <Post title="Terceiro Post">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil
          adipisci eligendi ea voluptatum! Doloremque nemo ab, fugit consectetur
          totam impedit esse corporis ea itaque, voluptatibus, dolorem tempore
          libero perferendis?
        </Post>
      </Main>

      <Footer />
    </>
  );
}
