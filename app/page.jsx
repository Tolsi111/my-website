import Image from "next/image";
import styles from "./page.module.scss";
import myself from "@/assets/me.webp";
import email from "@/assets/email.svg";
import github from "@/assets/github.svg";
import linkedin from "@/assets/linkedin.svg";
import phone from "@/assets/phone.svg";
import puzzle2 from "@/assets/puzzle2.svg";
import coding from "@/assets/coding.svg";
import chess from "@/assets/chess.svg";
import gamepad from "@/assets/gamepad.svg";
import painting from "@/assets/painting.svg";
import puzzle1 from "@/assets/puzzle1.svg";
import soccer from "@/assets/soccer.svg";
import slack from "@/assets/slack.svg";
import jira from "@/assets/jira.svg";
import git from "@/assets/git.svg";
import angular from "@/assets/angular.svg";
import databases from "@/assets/databases.svg";
import java from "@/assets/java.svg";
import react from "@/assets/react.svg";
import spring from "@/assets/spring.svg";
import debug from "@/assets/debug.svg";
import css from "@/assets/css.svg";
import firebase from "@/assets/firebase.svg";
import postman from "@/assets/postman.svg";
import html from "@/assets/html.svg";
import javascript from "@/assets/javascript.svg";
import nextjs from "@/assets/nextjs.svg";
import typescript from "@/assets/typescript.svg";
import moon from "@/assets/moon.svg";
import sun from "@/assets/sun.svg";
import math from "@/assets/math.svg";
import graduation from "@/assets/graduation.svg";
import AnimatedSlider from "@/components/animated-slider/AnimatedSlider";
import Link from "next/link";
import NavigationArrow from "@/components/navigation-arrow/NavigationArrow";
import ExternalLinkButton from "@/components/external-link-button/ExternalLinkButton";
import ChangeThemeButton from "@/components/change-theme-button/ChangeThemeButton";

export default function Home() {
  // contact
  const contactSliderImages = [email, github, linkedin, phone];
  // hobbies
  const hobbiesSliderImagesFirst = [puzzle2, coding, chess];
  const hobbiesSliderImagesSecond = [gamepad, painting, puzzle1, soccer];
  // experience
  const experienceSliderImagesfirst = [slack, jira, git];
  const experienceSliderImagesSecond = [angular, databases, java, react, spring];
  // projects
  const sliderImagesFrameworks = [angular, react, spring, nextjs];
  const sliderImagesLanguages = [html, javascript, css, typescript];
  const sliderImagesTools = [firebase, git, postman, debug];
  // theme
  const sliderImagesTheme = [moon, sun];
  // education
  const sliderImagesEducation = [math, graduation, coding];

  return (
  <main className={styles['main-container']}>
    <article className={`${styles.title}`}>
      <h1>Full-stack Web Developer</h1>
      <h2>With a Front-end focus</h2>
      <h3>A well rounded professional</h3>
    </article>
    <article className={`${styles.experience}`}>
      <h3 className={styles.navigation}>Work experience</h3>
      <Link href={"/experience"} className={styles.navarrow}><NavigationArrow/></Link>
      <div className={styles.slider}>
        <AnimatedSlider vectorGraphics={experienceSliderImagesfirst}/>
      </div>
      <div className={styles.slider2}>
        <AnimatedSlider vectorGraphics={experienceSliderImagesSecond} reverseAnimation={true}/>
      </div>
    </article>
    <article className={`${styles.contacts}`}>
      <h3>Contacts</h3>
      <ul>
        <li><ExternalLinkButton targetUrl="https://www.linkedin.com/in/romulus-andrei-bacila-662b1b196/" linkText="Linkedin"/></li>
        <li><ExternalLinkButton targetUrl="https://github.com/Tolsi111" linkText="Github"/></li>
        <li><ExternalLinkButton targetUrl="https://tolsi111.github.io/CSS-My-website/Romulus-Andrei%20Bacila%20CV%20Final.pdf" linkText="My CV"/></li>
      </ul>
      <div className={styles.slider}>
        <AnimatedSlider vectorGraphics={contactSliderImages} reverseAnimation={true}/>
      </div>
      <div className={styles.slider2}>
        <AnimatedSlider vectorGraphics={contactSliderImages}/>
      </div>
    </article>
    <article className={`${styles.me}`}>
      <h1>Romulus-Andrei Bacila</h1>
      <div className={styles.flex}>
        <Image src={myself} alt="Picture of me" width={210} height={380} className={styles.picture}/>
      </div>
    </article>
    <article className={`${styles.projects}`}>
      <h3 className={styles.navigation}>Check out some of my work</h3>
      <Link href={"/projects"} className={styles.navarrow}><NavigationArrow/></Link>
      <div className={styles.slider}>
        <AnimatedSlider vectorGraphics={sliderImagesFrameworks} reverseAnimation={true}/>
      </div>
      <div className={styles.slider2}>
        <AnimatedSlider vectorGraphics={sliderImagesLanguages}/>
      </div>
      <div className={styles.slider3}>
        <AnimatedSlider vectorGraphics={sliderImagesTools} reverseAnimation={true}/>
      </div>
    </article>
    <article className={`${styles.about}`}>
      <h3 className={styles.navigation}>About me</h3>
      <Link href={"/about"} className={styles.navarrow}><NavigationArrow/></Link>
      <div className={styles.slider}>
        <AnimatedSlider vectorGraphics={hobbiesSliderImagesFirst} reverseAnimation={true}/>
      </div>
      <div className={styles.slider2}>
        <AnimatedSlider vectorGraphics={hobbiesSliderImagesSecond} reverseAnimation={true}/>
      </div>
    </article>
    <article className={`${styles.education}`}>
      <h3>Education</h3>
      <Link href={"/education"} className={styles.navarrow}><NavigationArrow/></Link>
      <div className={styles.slider}>
        <AnimatedSlider vectorGraphics={sliderImagesEducation}/>
      </div>
    </article>
    <article className={`${styles.theme}`}>
      <h3>Change to a random theme</h3>
      <div className={styles.navarrow}><ChangeThemeButton/></div>
      <div className={styles.slider}>
        <AnimatedSlider vectorGraphics={sliderImagesTheme} reverseAnimation={true}/>
      </div>
    </article>
  </main>
  );
}
