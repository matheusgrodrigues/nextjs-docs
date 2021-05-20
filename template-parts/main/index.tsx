import styles from "./index.module.scss";

interface MainProps {
  children: any;
}

export default function Main({ children }: MainProps) {
  return <main className={styles.lMain}>{children}</main>;
}
