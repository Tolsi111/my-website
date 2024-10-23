import React from "react";
import styles from "./ExternalLinkButton.module.scss";

interface ExternalLinkButtonProps {
  targetUrl: string;
  linkText: string;
}

export default function ExternalLinkButton(props: ExternalLinkButtonProps) {
  return (
    <a
      href={props.targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <span className={styles.text}>{props.linkText}</span>
      <div className={styles.underline}></div>
    </a>
  );
}
