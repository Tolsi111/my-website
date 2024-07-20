import styles from "./page.module.scss";

export default function Home() {
  return (
  <main className={styles['main-container']}>
    <article className={`${styles.title} ${styles.flex}`}>
      <h1>Full-stack Web Developer</h1>
      <h2>With a Front-end focus</h2>
      <h3>Also, React is my favourite</h3>
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
