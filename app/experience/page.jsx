"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./experience-page.module.scss";
import navArrowStyles from "@/assets/styles/navarrow.module.scss";
import layoutStyles from "@/assets/styles/layouts.module.scss";
import Link from "next/link";
import NavigationArrow from "@/components/navigation-arrow/NavigationArrow";

export default function Experience() {
  const lineRef = useRef(null);
  const dragOffset = useRef(0);

  const [position, setPosition] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [showFirstTitle, setShowFirstTitle] = useState(true);

  const ITEM_SIZE = 30;

  const adjustPosition = (y) => {
    console.log("Y:", y);
    if (y < 200) {
      setShowFirstTitle(true);
    } else {
      setShowFirstTitle(false);
    }
    setPosition(y);
  };

  const startDrag = (e) => {
    if (!lineRef.current) return;

    const rect = lineRef.current.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;

    dragOffset.current = mouseY - position;

    setDragging(true);
  };

  useEffect(() => {
    const handleMove = (e) => {
      if (!dragging || !lineRef.current) return;

      const rect = lineRef.current.getBoundingClientRect();
      let y = e.clientY - rect.top - dragOffset.current;
      y = Math.max(0, Math.min(y, rect.height - ITEM_SIZE));

      // console.log(
      //   "Position:",
      //   Math.round((y / (rect.height - ITEM_SIZE)) * 100),
      //   "%",
      // );
      adjustPosition(y);
    };

    const handleUp = () => {
      setDragging(false);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [dragging]);

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
        {/* <h3>Slider</h3> */}
        <div className={styles["drag-line"]} ref={lineRef}>
          <div
            className={styles["drag-item"]}
            onPointerDown={startDrag}
            style={{
              transform: `translateY(${position}px)`,
            }}
          ></div>
        </div>
      </section>
      <section className={styles["job-title"]}>
        {showFirstTitle && (
          <div className={styles["first-title"]}>
            <h2>
              <span>Software Engineer</span> <span>@BMW Techworks</span>
            </h2>
            <h3>
              <span>Frontend Developer</span>
              <span> / Full-Stack Developer</span>
            </h3>
            <h4>
              <span>Lead</span> <span> Developer </span>
            </h4>
          </div>
        )}
        {!showFirstTitle && (
          <div className={styles["second-title"]}>
            <h2>
              <span>Full Stack Developer</span> <span>@Rodeapps</span>
            </h2>
            <h3>
              <span>Spring Boot,</span>
              <span> Angular & React</span>
            </h3>
            <h4>
              <span>Mostly</span> <span> Angular </span>
            </h4>
          </div>
        )}
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
