import styles from "./index.module.scss";

interface IMenu {
  children: any;
}

export default function Menu({ children }: IMenu) {
  return (
    <nav className={styles.tp_menu}>
      <ul className={styles.tp_menu__list}>{children}</ul>
    </nav>
  );
}
