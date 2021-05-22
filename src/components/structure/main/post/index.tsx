import styles from "./index.module.scss";

interface PostInterface {
  title: string;
  children: any;
}

export default function Post({ children, title }: PostInterface) {
  return (
    <div className={styles.c_post}>
      <h1 className={styles.c_post__title}>{title}</h1>
      <p className={styles.c_post__description}>{children}</p>
    </div>
  );
}
