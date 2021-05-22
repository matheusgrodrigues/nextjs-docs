import Image from "next/image";

import styles from "./index.module.scss";

import Main from "src/components/structure/main";

export default function Welcome() {
  return (
    <Main classe={styles.l_welcome}>
      <div className={styles.l_welcome__foto}>
        <Image src="/images/profile.jpg" width={144} height={144} />
      </div>

      <div className={styles.l_welcome__desc}>
        <h2 className={styles.l_welcome__desc_nome}>Matheus Gomes</h2>
        <span className={styles.l_welcome__desc_cargo}>
          Desenvolvedor Front end
        </span>

        <div className={styles.l_welcome__desc_social}>
          <a href="https://github.com/MatheusGomesWeb" target="blank">
            <Image src="/images/social/github.png" width={22} height={22} />
          </a>
        </div>
      </div>
    </Main>
  );
}
