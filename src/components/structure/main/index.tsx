import styles from "./index.module.scss";

interface IMain {
  children: any;
  classe?: any;
}

export default function Main({ classe, children }: IMain) {
  return (
    <main className={classe ? `${styles.lMain} ${classe}` : `${styles.lMain}`}>
      {children}
    </main>
  );
}
