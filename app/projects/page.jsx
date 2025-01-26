import styles from './projects-page.module.scss'

export default function Projects() {
    return (
        <main className={styles['main-container']}>
            <section className={styles['wheel-slider']} >
                {'slider'}
            </section>
            <section className={styles['wheel-controls']} >
            {'slider controls'}
            </section>
            <section className={styles['project-title']} >
                {'title'}
            </section>
            <section className={styles['project-links']} >
                {'links'}
            </section>
            <section className={styles['back-home']} >
                {'back-home'}
            </section>
            <section className={styles['project-description']} >
                {'description'}
            </section>
        </main>
    )
}