import styles from "./experience-page.module.scss";
import navArrowStyles from "@/assets/styles/navarrow.module.scss";
import layoutStyles from "@/assets/styles/layouts.module.scss";
import Link from "next/link";
import NavigationArrow from "@/components/navigation-arrow/NavigationArrow";

export default function Experience() {
  return (
    <main className={layoutStyles["bento-layout"]}>
      <section
        className={`${navArrowStyles["navarrow-container"]} ${styles["back-home"]}`}
      >
        <h3>Back to home page</h3>
        <Link href={"../"} className={navArrowStyles["navarrow"]}>
          <NavigationArrow />
        </Link>
      </section>
      <section className={styles["slider"]}>
        <h3>Slider</h3>
      </section>
      <section className={styles["job-title"]}>
        <h3>Job Title</h3>
      </section>
      <section className={styles["highlights"]}>
        <h3>Highlights</h3>
      </section>
      <section className={styles["tech-stack"]}>
        <h3>Tech Stack</h3>
      </section>
    </main>
  );
}
