import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us - School App</title>
        <meta name="description" content="Get in touch with us" />
      </Head>

      <header className={styles.header}>
        <h1>Contact Us</h1>
      </header>

      <main className={styles.main}>
        <p>This is the Contact Us page.</p>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 School Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
