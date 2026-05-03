import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={`container ${styles.heroSection}`} id="hero">
            <div className={styles.headerStack}>
                <h1 className={styles.title}>AETHER</h1>
                <p className={styles.subtitle}>
                    Aether grows with you<br />through every small step
                </p>
            </div>

            <div className={styles.islandContainer}>
                <img src="/assets/floating-island.png" alt="Aether Floating Island" className={styles.islandImage} />
            </div>

            <div className={styles.actionCard}>
                <a href="#download" className={`btn btn-primary ${styles.primaryBtn}`}>
                    Start Journey
                </a>
                <a href="#download" className={`btn ${styles.secondaryBtn}`}>
                    Already have an account?
                </a>
                <p className={styles.disclaimer}>
                    By continuing, you agree to our <strong>Privacy Policy</strong> and<br />
                    <strong>Terms of Service</strong>. Are you a <strong>professional?</strong>
                </p>
            </div>
        </section>
    );
}
