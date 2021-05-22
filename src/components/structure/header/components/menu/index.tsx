import styles from "./index.module.scss";

interface MenuProps {
  children: any;
}

export default function Menu({ children }: MenuProps) {
  return (
    <nav className={styles.tp_menu}>
      <ul className={styles.tp_menu__list}>{children}</ul>
    </nav>
  );
}
