import Link from "next/link";

import Menu from "./components/menu";

import styles from "./index.module.scss";

interface HeaderProps {
  children?: any;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className={styles.lHeader}>
      <Menu>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </Menu>

      {children}
    </header>
  );
}
