"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./experience-page.module.scss";
import navArrowStyles from "@/assets/styles/navarrow.module.scss";
import layoutStyles from "@/assets/styles/layouts.module.scss";
import Link from "next/link";
import NavigationArrow from "@/components/navigation-arrow/NavigationArrow";
import { techStack } from "./tech-stack-map";

export default function Experience() {
  const lineRef = useRef(null);
  const dragOffset = useRef(0);

  const [position, setPosition] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [showFirstTitle, setShowFirstTitle] = useState(true);
  const [techStackIndex, setTechStackIndex] = useState(10);

  const rightContainerRef = useRef(null);

  const ITEM_SIZE = 30;

  const adjustPosition = (y, percentage) => {
    console.log("Y:", percentage, "%");
    // Job title switch at 60%
    if (percentage >= 60) {
      setShowFirstTitle(true);
    } else {
      setShowFirstTitle(false);
    }
    // Tech stack switch every 10%
    if (Math.floor(percentage / 10) !== techStackIndex) {
      setTechStackIndex(Math.floor(percentage / 10));
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

  // Handle dragging
  useEffect(() => {
    const handleMove = (e) => {
      if (!dragging || !lineRef.current) return;

      const rect = lineRef.current.getBoundingClientRect();
      let y = e.clientY - rect.top - dragOffset.current;
      y = Math.max(0, Math.min(y, rect.height - ITEM_SIZE));
      adjustPosition(
        y,
        100 - Math.round((y / (rect.height - ITEM_SIZE)) * 100),
      );
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

  // Handle scroll-based animations for the right container
  useEffect(() => {
    if (!rightContainerRef.current) return;

    const spans = Array.from(
      rightContainerRef.current.querySelectorAll("span"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles["in-view"]);
          } else {
            entry.target.classList.remove(styles["in-view"]);
          }
        });
      },
      { threshold: 0.1 },
    );

    spans.forEach((span) => observer.observe(span));

    return () => observer.disconnect();
  }, []);

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
      {/* SLIDER*/}
      <section className={styles["slider"]}>
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
      {/* JOB TITLE */}
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
      {/* HIGHLIGHTS */}
      <section className={styles["highlights"]}>
        <div className={styles["left"]}>
          <p>Lead Engineer</p>
          <p>Up to date</p>
          <p>Angular Expert</p>
          <p>Proactive & Results driven</p>
          <p>Trusted with responsibility</p>
          <p>Eager to help</p>
          <p>Community builder</p>
          <p>AI Explorer</p>
          {/* Rodeapps */}
          <p>Full-Stack Foundations</p>
          <p>Taking Initiative</p>
          <p>Frontend Focus</p>
          <p>Problem solver</p>
          <p>Product Mindset</p>
        </div>
        <div className={styles["right"]} ref={rightContainerRef}>
          <div>
            <span>
              I lead the development of a full-stack application
              <div className={styles["underline"]}></div>
            </span>
            built on a serverless AWS architecture. While my main focus is
            crafting intuitive and performant user interfaces with Angular, I
            also help shape the platform's overall technical direction. Working
            closely with engineers across the stack, I make sure the application
            remains stable, scalable, and ready to grow.
          </div>

          <div>
            As the frontend lead, my duty is making sure our application doesn't
            just work today, but it's prepared for tomorrow as well.{" "}
            <span>
              I stay up to date<div className={styles["underline"]}></div>
            </span>
            with the Angular ecosystem, regularly adopting modern patterns such
            as signals and ensuring our project remains on current Angular
            versions. This helps us maintain strong performance, security, and
            long-term maintainability.
          </div>

          <div>
            I've worked with Angular long enough to see the framework evolve
            through multiple architectural generations. My first task as I
            joined my project was to conduct{" "}
            <span>
              a complete modernization effort
              <div className={styles["underline"]}></div>
            </span>
            , migrating from a module-based Angular 16 architecture to Angular
            20 with standalone components and modern patterns. The result was a{" "}
            <span>
              significantly simpler codebase
              <div className={styles["underline"]}></div>
            </span>{" "}
            with less boilerplate, improved maintainability, and a foundation
            that's much easier to evolve.
          </div>

          <div>
            I'm constantly looking for opportunities to further improve both the
            user experience and the codebase. Whether it's refining an existing
            feature, simplifying a complex implementation, or exploring a new
            architectural approach, I ensure{" "}
            <span>
              every improvement is worth the investment
              <div className={styles["underline"]}></div>
            </span>
            . Performance is key when working in such a big organization so I
            regularly study and experiment with optimization techniques to
            improve runtime responsiveness and Core Web Vitals. Applying
            strategies such as OnPush change detection, code splitting, and lazy
            loading has helped me{" "}
            <span>
              significantly reduce application overhead
              <div className={styles["underline"]}></div>
            </span>
            , in one case cutting the initial bundle size by more than 30%.
          </div>

          <div>
            I believe strong software comes from engineers who genuinely care
            about the systems they build. Over time,{" "}
            <span>
              I've become a trusted owner
              <div className={styles["underline"]}></div>
            </span>{" "}
            of key parts of our platform, taking responsibility not only for
            implementation but also for long-term maintenance, architectural
            decisions, reliability, and future direction. When challenges arise,
            I don't wait for someone else to solve them.{" "}
            <span>I take ownership</span> and drive them to completion.
          </div>

          <div>
            I enjoy helping wherever I'm needed. When another team within the
            organization needed support,{" "}
            <span>
              I joined their project part-time{" "}
              <div className={styles["underline"]}></div>
            </span>{" "}
            for several months. Thanks to my technical expertise and
            collaborative personality, I was able to ramp up quickly,{" "}
            <span>
              contribute from the start
              <div className={styles["underline"]}></div>
            </span>
            , and help deliver features on a highly complex codebase.
          </div>

          <div>
            I enjoy sharing knowledge and helping others grow.{" "}
            <span>
              I've mentored two students{" "}
              <div className={styles["underline"]}></div>
            </span>{" "}
            as they took their first steps into professional software
            development, helping them build technical confidence and practical
            engineering skills. I've also participated in hiring processes by{" "}
            <span>
              shadowing interviews <div className={styles["underline"]}></div>
            </span>{" "}
            and contributing to candidate evaluations, giving me valuable
            insight into what makes great engineers and teams.
          </div>

          <div>
            Beyond using off-the-shelf solutions, I built custom tools tailored
            to my own development process, allowing me to integrate AI more
            efficiently into everyday tasks. I've also{" "}
            <span>
              organized internal knowledge-sharing sessions
              <div className={styles["underline"]}></div>
            </span>{" "}
            that helped accelerate AI adoption across my team and demonstrated
            practical ways these tools could improve productivity.
          </div>
          {/* Rodeapps */}
          <div>
            My first professional experience gave me exposure to the complete
            software development lifecycle on a delivery management platform
            built with a{" "}
            <span>
              RESTful microservices architecture
              <div className={styles["underline"]}></div>
            </span>
            . I received specialized training in several technologies such as
            Spring Boot, React and Angular. I ended up working across the stack,
            switching from backend to frontend depending on the needs of my
            team.
          </div>

          <div>
            Although I started as a full-stack developer, I discovered a{" "}
            <span>
              passion for frontend development
              <div className={styles["underline"]}></div>
            </span>
            and naturally gravitated towards it. Angular became my primary tool,
            and I enjoyed the challenge of turning a given design or business
            requirements into intuitive, responsive interfaces that users could
            rely on.
          </div>

          <div>
            With just two years of experience under my belt, I was trusted to{" "}
            <span>
              kick off the development of a new
              <div className={styles["underline"]}></div>
            </span>{" "}
            <span>
              Angular application from scratch, leading a team
              <div className={styles["underline"]}></div>
            </span>
            <span>
              of 3 juniors<div className={styles["underline"]}></div>
            </span>{" "}
            including myself. From establishing the project structure to
            implementing core functionality, the experience taught me the
            importance of maintainable architecture and thoughtful technical
            decisions from day one.
          </div>

          <div>
            I enjoyed tackling new technical challenges. Throughout the project
            I implemented all sorts of features such as a custom
            text-highlighting directive, an efficient polling system for
            real-time updates, route reuse strategies to improve navigation
            performance, and a complex file management interface built around
            dynamic forms and workflows. I also contributed to the{" "}
            <span>
              development of an Angular component library
              <div className={styles["underline"]}></div>
            </span>{" "}
            that provided custom UI components used across different
            applications, helping improve consistency and reduce development
            effort for future features.
          </div>

          <div>
            Some of my most valuable lessons came from{" "}
            <span>
              working closely with non-technical colleagues
              <div className={styles["underline"]}></div>
            </span>
            . By collaborating directly with business analysts and designers, I
            gained a deeper understanding of how technical decisions affect
            usability and user experience, and I was able to contribute to UI
            and UX discussions beyond pure implementation.
          </div>
        </div>
      </section>
      {/* TECH STACK */}
      <section className={styles["tech-stack"]}>
        <h3>Tech Stack</h3>
        <div className={styles["tech-stack-container"]}>
          {techStack[techStackIndex].map((item, index) => (
            <span
              key={item.name}
              className={styles["tech-stack-item"]}
              style={{
                borderColor: item.color,
                color: item.color,
                ...(item.scale && {
                  transform: `scale(${item.scale})`,
                }),
                ...(item.size && {
                  width: `${item.size.width}px`,
                  height: `${item.size.height}px`,
                }),
              }}
            >
              {item.name}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
