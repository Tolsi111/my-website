import styles from './projects-page.module.scss'
import Link from "next/link";
import NavigationArrow from "@/components/navigation-arrow/NavigationArrow";
import ExternalLinkButton from "@/components/external-link-button/ExternalLinkButton";

export default function Projects() {
    return (
        <main className={styles['main-container']}>
            <section className={styles['wheel-slider']} >
                {'slider'}
                <h3>Angular</h3>
            </section>
            <section className={styles['wheel-controls']} >
            <h3>Slider controls</h3>
            {/* TODO: add control arrows */}
            </section>
            <section className={styles['project-title']} >
                {/* TODO: dynamic title */}
                <h1>Title of the project</h1>
            </section>
            <section className={styles['project-links']} >
                <h3>Project links</h3>
                {/* TODO: dynamic links based on current project. The repo might be private */}
                <ul>
                    <li><ExternalLinkButton targetUrl="https://github.com/Tolsi111" linkText="Preview site"/></li>
                    <li><ExternalLinkButton targetUrl="https://github.com/Tolsi111" linkText="View on Github"/></li>
                </ul>

            </section>
            <section className={styles['back-home']} >
                <h3>Back to home page</h3>
                <Link href={"../"} className={styles.navarrow}><NavigationArrow/></Link>
            </section>
            <section className={styles['project-description']} >
                {/* TODO: dynamic description */}
                <article className={styles['project-usage']}>
                    <p>Ongoing</p>
                    <p>Here should go a brief description of the project from a user's POV.</p>
                </article>
                <article className={styles['project-features']}>
                    <p>Here should go a more technical description of the features.</p>
                </article>

                <article className={styles['project-tech-stack']}>
                    <p>Here should go a more technical description of the features.</p>
                </article>
            </section>
        </main>
    )
}