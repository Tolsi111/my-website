"use client";
import React from "react";
import navArrowStyles from "@/assets/styles/navarrow.module.scss";
import NavigationArrow from "../navigation-arrow/NavigationArrow";
import styles from "./ChangeThemeButton.module.scss";

export default function ChangeThemeButton() {
  // AI semi-random generated themes
  const themes = [
    {
      "--color-bg-main": "#1b1b1b",
      "--color-bg-secondary": "#2e2e2e",
      "--color-text": "#ffffff",
      "--color-text-secondary": "#cccccc",
      "--background-squares": "rgba(255, 255, 255, 0.1)",
    },
    {
      "--color-bg-main": "#ffffff",
      "--color-bg-secondary": "#f7f7f7",
      "--color-text": "#333333",
      "--color-text-secondary": "#555555",
      "--background-squares": "rgba(51, 51, 51, 0.1)",
    },
    {
      "--color-bg-main": "#fffbf0",
      "--color-bg-secondary": "#f4e3c7",
      "--color-text": "#5c3d2e",
      "--color-text-secondary": "#8b6b55",
      "--background-squares": "rgba(92, 61, 46, 0.1)",
    },
    {
      "--color-bg-main": "#14213d",
      "--color-bg-secondary": "#1f4068",
      "--color-text": "#e8e8e8",
      "--color-text-secondary": "#a9a9a9",
      "--background-squares": "rgba(232, 232, 232, 0.2)",
    },
    {
      "--color-bg-main": "#fef6e4",
      "--color-bg-secondary": "#f7d06a",
      "--color-text": "#172c66",
      "--color-text-secondary": "#3d567c",
      "--background-squares": "rgba(23, 44, 102, 0.2)",
    },
    {
      "--color-bg-main": "#232931",
      "--color-bg-secondary": "#393e46",
      "--color-text": "#4ecca3",
      "--color-text-secondary": "#eeeeee",
      "--background-squares": "rgba(78, 204, 163, 0.2)",
    },
    {
      "--color-bg-main": "#0b0c10",
      "--color-bg-secondary": "#1f2833",
      "--color-text": "#66fcf1",
      "--color-text-secondary": "#c5c6c7",
      "--background-squares": "rgba(102, 252, 241, 0.2)",
    },
    {
      "--color-bg-main": "#001f3f",
      "--color-bg-secondary": "#003366",
      "--color-text": "#ffffff",
      "--color-text-secondary": "#b3c7e6",
      "--background-squares": "rgba(255, 255, 255, 0.2)",
    },
    {
      "--color-bg-main": "#2b2d42",
      "--color-bg-secondary": "#8d99ae",
      "--color-text": "#edf2f4",
      "--color-text-secondary": "#ef233c",
      "--background-squares": "rgba(237, 242, 244, 0.2)",
    },
    {
      "--color-bg-main": "#264653",
      "--color-bg-secondary": "#2a9d8f",
      "--color-text": "#e9c46a",
      "--color-text-secondary": "#f4a261",
      "--background-squares": "rgba(233, 196, 106, 0.2)",
    },
    {
      "--color-bg-main": "#1a535c",
      "--color-bg-secondary": "#4ecdc4",
      "--color-text": "#f7fff7",
      "--color-text-secondary": "#ff6b6b",
      "--background-squares": "rgba(247, 255, 247, 0.2)",
    },
    {
      "--color-bg-main": "#003049",
      "--color-bg-secondary": "#d62828",
      "--color-text": "#f77f00",
      "--color-text-secondary": "#eae2b7",
      "--background-squares": "rgba(247, 127, 0, 0.2)",
    },
    {
      "--color-bg-main": "#283618",
      "--color-bg-secondary": "#606c38",
      "--color-text": "#fefae0",
      "--color-text-secondary": "#dda15e",
      "--background-squares": "rgba(254, 250, 224, 0.2)",
    },
    {
      "--color-bg-main": "#22223b",
      "--color-bg-secondary": "#4a4e69",
      "--color-text": "#9a8c98",
      "--color-text-secondary": "#c9ada7",
      "--background-squares": "rgba(154, 140, 152, 0.2)",
    },
    {
      "--color-bg-main": "#03071e",
      "--color-bg-secondary": "#370617",
      "--color-text": "#ffba08",
      "--color-text-secondary": "#faa307",
      "--background-squares": "rgba(255, 186, 8, 0.2)",
    },
    {
      "--color-bg-main": "#023047",
      "--color-bg-secondary": "#8ecae6",
      "--color-text": "#ffb703",
      "--color-text-secondary": "#fb8500",
      "--background-squares": "rgba(255, 183, 3, 0.2)",
    },
    {
      "--color-bg-main": "#6a0572",
      "--color-bg-secondary": "#c6229c",
      "--color-text": "#fde24f",
      "--color-text-secondary": "#fff5b7",
      "--background-squares": "rgba(253, 226, 79, 0.2)",
    },
    {
      "--color-bg-main": "#003f5c",
      "--color-bg-secondary": "#58508d",
      "--color-text": "#ff6361",
      "--color-text-secondary": "#ffa600",
      "--background-squares": "rgba(255, 99, 97, 0.2)",
    },
    {
      "--color-bg-main": "#0d1321",
      "--color-bg-secondary": "#1d2d44",
      "--color-text": "#3e5c76",
      "--color-text-secondary": "#748cab",
      "--background-squares": "rgba(62, 92, 118, 0.2)",
    },
    {
      "--color-bg-main": "#102542",
      "--color-bg-secondary": "#243e63",
      "--color-text": "#f87060",
      "--color-text-secondary": "#c4d7e0",
      "--background-squares": "rgba(248, 112, 96, 0.2)",
    },
    {
      "--color-bg-main": "#faf3e0",
      "--color-bg-secondary": "#e7dbc6",
      "--color-text": "#2b2e4a",
      "--color-text-secondary": "#53354a",
      "--background-squares": "rgba(43, 46, 74, 0.2)",
    },
    {
      "--color-bg-main": "#212121",
      "--color-bg-secondary": "#424242",
      "--color-text": "#f5f5f5",
      "--color-text-secondary": "#bdbdbd",
      "--background-squares": "rgba(245, 245, 245, 0.2)",
    },
    {
      "--color-bg-main": "#f4f1de",
      "--color-bg-secondary": "#81b29a",
      "--color-text": "#3d405b",
      "--color-text-secondary": "#e07a5f",
      "--background-squares": "rgba(61, 64, 91, 0.2)",
    },
    {
      "--color-bg-main": "#e8f9fd",
      "--color-bg-secondary": "#d5effc",
      "--color-text": "#1a374d",
      "--color-text-secondary": "#406882",
      "--background-squares": "rgba(26, 55, 77, 0.2)",
    },
    {
      "--color-bg-main": "#1f1f1f",
      "--color-bg-secondary": "#383838",
      "--color-text": "#c9c9c9",
      "--color-text-secondary": "#e0e0e0",
      "--background-squares": "rgba(201, 201, 201, 0.2)",
    },
    {
      "--color-bg-main": "#feffde",
      "--color-bg-secondary": "#d8f3dc",
      "--color-text": "#081c15",
      "--color-text-secondary": "#40916c",
      "--background-squares": "rgba(8, 28, 21, 0.2)",
    },
    {
      "--color-bg-main": "#fff8e1",
      "--color-bg-secondary": "#ffe082",
      "--color-text": "#424242",
      "--color-text-secondary": "#6d4c41",
      "--background-squares": "rgba(66, 66, 66, 0.2)",
    },
    {
      "--color-bg-main": "#edf2fb",
      "--color-bg-secondary": "#d7e3fc",
      "--color-text": "#495057",
      "--color-text-secondary": "#8e9aaf",
      "--background-squares": "rgba(73, 80, 87, 0.2)",
    },
    {
      "--color-bg-main": "#2d3142",
      "--color-bg-secondary": "#4f5d75",
      "--color-text": "#ef8354",
      "--color-text-secondary": "#bfc0c0",
      "--background-squares": "rgba(239, 131, 84, 0.2)",
    },
    {
      "--color-bg-main": "#00171f",
      "--color-bg-secondary": "#003459",
      "--color-text": "#ffc300",
      "--color-text-secondary": "#2a6f97",
      "--background-squares": "rgba(255, 195, 0, 0.2)",
    },
    {
      "--color-bg-main": "#f1faee",
      "--color-bg-secondary": "#a8dadc",
      "--color-text": "#1d3557",
      "--color-text-secondary": "#457b9d",
      "--background-squares": "rgba(29, 53, 87, 0.2)",
    },
    {
      "--color-bg-main": "#bde0fe",
      "--color-bg-secondary": "#a2d2ff",
      "--color-text": "#03045e",
      "--color-text-secondary": "#023e8a",
      "--background-squares": "rgba(3, 4, 94, 0.2)",
    },
    {
      "--color-bg-main": "#ffddc1",
      "--color-bg-secondary": "#ffd7ba",
      "--color-text": "#6b4226",
      "--color-text-secondary": "#8c6133",
      "--background-squares": "rgba(107, 66, 38, 0.2)",
    },
    {
      "--color-bg-main": "#f0efeb",
      "--color-bg-secondary": "#d9d4cf",
      "--color-text": "#3a3a3a",
      "--color-text-secondary": "#5e5e5e",
      "--background-squares": "rgba(58, 58, 58, 0.2)",
    },
    {
      "--color-bg-main": "#f0ece3",
      "--color-bg-secondary": "#d8c3a5",
      "--color-text": "#8e8d8a",
      "--color-text-secondary": "#e98074",
      "--background-squares": "rgba(142, 141, 138, 0.2)",
    },
    {
      "--color-bg-main": "#1b3a4b",
      "--color-bg-secondary": "#28527a",
      "--color-text": "#8ac4d0",
      "--color-text-secondary": "#f4d160",
      "--background-squares": "rgba(138, 196, 208, 0.2)",
    },
    {
      "--color-bg-main": "#e6f5ff",
      "--color-bg-secondary": "#bee3f8",
      "--color-text": "#073b4c",
      "--color-text-secondary": "#118ab2",
      "--background-squares": "rgba(7, 59, 76, 0.2)",
    },
    {
      "--color-bg-main": "#03071e",
      "--color-bg-secondary": "#370617",
      "--color-text": "#ffba08",
      "--color-text-secondary": "#e85d04",
      "--background-squares": "rgba(255, 186, 8, 0.2)",
    },
    {
      "--color-bg-main": "#3b6978",
      "--color-bg-secondary": "#204051",
      "--color-text": "#c4c4c4",
      "--color-text-secondary": "#84a9ac",
      "--background-squares": "rgba(196, 196, 196, 0.2)",
    },
    {
      "--color-bg-main": "#161a1d",
      "--color-bg-secondary": "#232f34",
      "--color-text": "#e63946",
      "--color-text-secondary": "#a8dadc",
      "--background-squares": "rgba(230, 57, 70, 0.2)",
    },
    {
      "--color-bg-main": "#003049",
      "--color-bg-secondary": "#d62828",
      "--color-text": "#f77f00",
      "--color-text-secondary": "#eae2b7",
      "--background-squares": "rgba(247, 127, 0, 0.2)",
    },
    {
      "--color-bg-main": "#2a1a5e",
      "--color-bg-secondary": "#3e1e68",
      "--color-text": "#ffe156",
      "--color-text-secondary": "#ffc107",
      "--background-squares": "rgba(255, 225, 86, 0.2)",
    },
    {
      "--color-bg-main": "#0a2239",
      "--color-bg-secondary": "#53a2be",
      "--color-text": "#ffffff",
      "--color-text-secondary": "#a3cef1",
      "--background-squares": "rgba(255, 255, 255, 0.2)",
    },
    {
      "--color-bg-main": "#121212",
      "--color-bg-secondary": "#1e1e1e",
      "--color-text": "#bb86fc",
      "--color-text-secondary": "#03dac6",
      "--background-squares": "rgba(187, 134, 252, 0.2)",
    },
    {
      "--color-bg-main": "#4a4e69",
      "--color-bg-secondary": "#22223b",
      "--color-text": "#9a8c98",
      "--color-text-secondary": "#c9ada7",
      "--background-squares": "rgba(154, 140, 152, 0.2)",
    },
    {
      "--color-bg-main": "#012a36",
      "--color-bg-secondary": "#226f54",
      "--color-text": "#ffffff",
      "--color-text-secondary": "#ff5a5f",
      "--background-squares": "rgba(255, 255, 255, 0.2)",
    },
    {
      "--color-bg-main": "#041c32",
      "--color-bg-secondary": "#04293a",
      "--color-text": "#d4af37",
      "--color-text-secondary": "#ebebeb",
      "--background-squares": "rgba(212, 175, 55, 0.2)",
    },
    {
      "--color-bg-main": "#f4f3ee",
      "--color-bg-secondary": "#d9d2c6",
      "--color-text": "#8a817c",
      "--color-text-secondary": "#bc4749",
      "--background-squares": "rgba(138, 129, 124, 0.2)",
    },
    {
      "--color-bg-main": "#06113c",
      "--color-bg-secondary": "#003566",
      "--color-text": "#ffc300",
      "--color-text-secondary": "#ffd60a",
      "--background-squares": "rgba(255, 195, 0, 0.2)",
    },
    {
      "--color-bg-main": "#3d348b",
      "--color-bg-secondary": "#7678ed",
      "--color-text": "#f7ff3c",
      "--color-text-secondary": "#ff5400",
      "--background-squares": "rgba(247, 255, 60, 0.2)",
    },
  ];

  function getRandomTheme(): { [key: string]: string } {
    const randomIndex = Math.floor(Math.random() * themes.length);
    return themes[randomIndex];
  }

  const changeTheme = () => {
    const root = document.documentElement;
    const randomTheme = getRandomTheme();
    Object.keys(randomTheme).forEach((key) => {
      root.style.setProperty(key, randomTheme[key]);
    });
  };

  return (
    <div
      className={`${navArrowStyles.navarrow} ${styles.changeThemeButton}`}
      onClick={changeTheme}
    >
      <NavigationArrow />
    </div>
  );
}
