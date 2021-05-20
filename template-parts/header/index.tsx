import styles from "./index.module.scss";

interface HeaderProps {
  children: any;
}

export default function Header({ children }: HeaderProps) {
  return <header className={styles.lHeader}>{children}</header>;
}
