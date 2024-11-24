"use client"

import { images,frases } from "./data";
import Image from "next/image";
import styles from "./page.module.css";
import StudentList from "./studentList";
import LimitedCounter from "./limitedCounter";
import AverageCalculator from "./averageCalculator";
import SurveySimulator from "./surveySimulator";
import ShoppingList from "./shoppingList";
import LoginForm from "./loginForm";
import ImageGallery from "./imageGallery";
import MultiCounter from "./multiCounter";
import UserTable from "./userTable";
import GuessTheNumber from "./guessTheNumber";
import TimeCounter from "./timeCounter";
import ThemeSelector from "./themeSelector";
import LiveValidationForm from "./liveValidationFrom";
import SurveySimulator2 from "./surveySimulator2";
import TextCarousel from "./textCarousel";

export default function Home() {
  return (
    <div>
      <TextCarousel frases={frases}/>
    </div>
  );
}
