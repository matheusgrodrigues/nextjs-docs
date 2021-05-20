import styles from "./index.module.scss";

interface MainProps {
  children: any;
  containerClass?: string;
}

export default function Main({ children, containerClass }: MainProps) {
  return (
    <main className={containerClass ? containerClass : styles.lMain}>
      {children}
    </main>
  );
}
