import styles from "./index.module.scss";

import Main from "src/components/structure/main";

export default function Welcome() {
  return (
    <Main>
      <h1 className={styles.l_welcome}>Bem vindo ao blog</h1>
    </Main>
  );
}
