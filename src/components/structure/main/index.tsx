import styles from "./index.module.scss";

interface MainProps {
  children: any;
  classe?: any;
}

export default function Main({ classe, children }: MainProps) {
  return (
    <main className={classe ? `${styles.lMain} ${classe}` : `${styles.lMain}`}>
      {children}
    </main>
  );
}
