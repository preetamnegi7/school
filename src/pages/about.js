import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our school, our mission, and our values" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>About Us</h1>
        <p>Learn more about our school, our mission, and our values.</p>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 School Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
