import Head from 'next/head';
import styles from '../styles/Main.module.css';
import PassiveIncomeCalculator from "../components/PassiveIncomeCalculator.js";
import Heading from "../components/Heading.js";
import { useState, useEffect } from "react";

export default function Main() {
  return (
    <div>
      <div className={styles.container}>
        <main className={styles.main}>
          <Heading text="Passive Income" />
          <PassiveIncomeCalculator />
        </main>
      </div>
    </div>
  );
}


