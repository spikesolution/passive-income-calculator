import Head from 'next/head';
import styles from '../styles/Main.module.css';
import TextInput from "../components/TextInput.js";
import Heading from "../components/Heading.js";
import { useState, useEffect } from "react";

export default function Main() {
  return (
    <div>
      <div className={styles.container}>
        <main className={styles.main}>
          <Heading text="Passive Income" />
          <TextInput name="capital" label="Capital ($k)" placeholder="0" />
          <TextInput name="apr" label="APR" placeholder="0" />
          <TextInput name="income" label="Income ($k/month)" placeholder="0" />
        </main>
      </div>
    </div>
  );
}


