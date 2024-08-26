import Image from "next/image";
import React from "react";
import styles from "./AnimatedSlider.module.scss";

interface AnimatedSliderProps {
  vectorGraphics: string[];
}

export default function AnimatedSlider({
  vectorGraphics,
}: {
  vectorGraphics: string[];
}) {
  return (
    <div
      className={styles.slider}
      style={{ "--quantity": vectorGraphics.length }} // add animation variable to props?
    >
      <div className={styles.list}>
        {vectorGraphics.map((graphic, index) => {
          return (
            <Image
              style={{ "--index": index }}
              src={graphic}
              width={25}
              height={25}
              alt={"vector icon " + index}
              className={styles.item}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
