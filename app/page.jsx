import styles from "./page.module.scss";

export default function Home() {
  return (
  <main className={styles['main-container']}>
    <div className={styles['row-flex']}>
      <section className={styles['contact']}></section>
      <div className={styles['col-flex']}>
        <section className={styles['side']}></section>
        <section className={styles['hobbies']}></section>
      </div>
    </div>
    <div className={styles['row-flex']}>
      <section className={styles['experience']}></section>
      <section className={styles['education']}></section>
    </div>
  </main>
  );
}
