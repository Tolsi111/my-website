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
import AnimatedSlider from "@/components/animated-slider/AnimatedSlider";

export default function Home() {
  const contactSliderImages = [email, github, linkedin, phone];
  const hobbiesSliderImagesFirst = [puzzle2, coding, chess];
  const hobbiesSliderImagesSecond = [gamepad, painting, puzzle1, soccer];
  

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
      <h1>Romulus-Andrei Bacila</h1>
      <ul>
        <li >Linkedin</li>
        <li >Github</li>
        <li >My cv</li>
        <li >Email</li>
      </ul>
      <div className={styles.slider}>
        <AnimatedSlider vectorGraphics={contactSliderImages} reverseAnimation={true}/>
      </div>
      <div className={styles.slider2}>
        <AnimatedSlider vectorGraphics={contactSliderImages}/>
      </div>
    </article>
    <article className={`${styles.me} ${styles.flex}`}>
      <Image src={myself} alt="Picture of me" width={210} height={380} className={styles.picture}/>
    </article>
    <article className={`${styles.projects} ${styles.flex}`}>
      {/* nav link */}projects
    </article>
    <article className={`${styles.hobbies} ${styles.flex}`}>
      {/* split this in two? one for hobbies and one for dark mode switch */}hobbies
      <div className={styles.slider}>
        <AnimatedSlider vectorGraphics={hobbiesSliderImagesFirst}/>
      </div>
      <div className={styles.slider2}>
        <AnimatedSlider vectorGraphics={hobbiesSliderImagesSecond} reverseAnimation={true}/>
      </div>
    </article>
    <article className={`${styles.education} ${styles.flex}`}>
      {/* button */}education
    </article>
    <article className={`${styles.theme} ${styles.flex}`}>
      {/* button */}theme
    </article>
  </main>
  );
}
