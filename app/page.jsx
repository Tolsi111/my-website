import styles from "./page.module.scss";

export default function Home() {
  return (
  <main className={styles['main-container']}>
    <article className={`${styles.title} ${styles.flex}`}>
title
    </article>
    <article className={`${styles.experience} ${styles.flex}`}>
      {/* nav link */}experience
    </article>
    <article className={`${styles.contacts} ${styles.flex}`}>
contacts
    </article>
    <article className={`${styles.me} ${styles.flex}`}>
me
    </article>
    <article className={`${styles.projects} ${styles.flex}`}>
      {/* nav link */}projects
    </article>
    <article className={`${styles.hobbies} ${styles.flex}`}>
      {/* nav link */}hobbies
    </article>
    <article className={`${styles.education} ${styles.flex}`}>
      {/* button */}education
    </article>
  </main>
  );
}
