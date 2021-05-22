import styles from "./index.module.scss";

interface IMenu {
  children: any;
}

export default function Menu({ children }: IMenu) {
  return (
    <nav className={styles.c_menu}>
      <ul className={styles.c_menu__list}>{children}</ul>
    </nav>
  );
}
