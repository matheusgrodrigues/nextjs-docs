import styles from "../../sass/layout/template-parts/l-header/l-header.module.scss";

interface HeaderProps {
  children: any;
}

export default function Header({ children }: HeaderProps) {
  return <header className={styles.l_header}>{children}</header>;
}
