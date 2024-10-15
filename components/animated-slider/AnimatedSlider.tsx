import Image from "next/image";
import React from "react";
import styles from "./AnimatedSlider.module.scss";

interface AnimatedSliderProps {
  vectorGraphics: string[];
  reverseAnimation?: boolean;
}

export default function AnimatedSlider(Props: AnimatedSliderProps) {
  return (
    <div
      className={styles.slider}
      style={{ "--quantity": Props.vectorGraphics.length }}
    >
      <div className={styles.list}>
        {Props.vectorGraphics.map((graphic, index) => {
          return (
            <Image
              style={{ "--index": index }}
              src={graphic}
              width={25}
              height={25}
              alt={"vector icon " + index}
              className={`${styles.item} ${
                Props.reverseAnimation
                  ? styles["reverse-slide"]
                  : styles["regular-slide"]
              }`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
