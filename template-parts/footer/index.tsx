import styles from "./index.module.scss";

interface FooterProps {
  children: any;
}

export default function Footer({ children }: FooterProps) {
  return <footer className={styles.lFooter}>{children}</footer>;
}
