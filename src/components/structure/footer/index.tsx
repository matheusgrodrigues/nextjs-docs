import styles from "./index.module.scss";

interface FooterProps {
  children?: any;
}

export default function Footer({ children }: FooterProps) {
  return (
    <footer className={styles.lFooter}>
      {children ? (
        children
      ) : (
        <p>
          Nextjs - Blog. todos os direitos reservados{" "}
          <a href="https://github.com/MatheusGomesWeb" target="blank">
            Matheus Gomes
          </a>
        </p>
      )}
    </footer>
  );
}
