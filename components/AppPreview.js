"use client";
import React from 'react';
import styles from './AppPreview.module.css';
import { BookOpen, Heart, Moon } from 'lucide-react';

export default function AppPreview() {
    return (
        <section className={`container ${styles.previewSection}`} id="app-preview">
            <div className={styles.textContent}>
                <div className={styles.label}>✦ APP PREVIEW</div>
                <h2 className={styles.headline}>Your journey,<br />beautifully simple.</h2>
                <p className={styles.subtext}>
                    Everything you need to understand your<br />mind, your emotions, and your dreams.
                </p>

                <div className={styles.featureMiniGrid}>
                    <div className={styles.miniFeature}>
                        <div className={styles.iconCircle}><BookOpen size={20} color="var(--color-pine)" /></div>
                        <h3>Reflect</h3>
                        <p>Journal your<br />thoughts</p>
                    </div>
                    <div className={styles.miniFeature}>
                        <div className={styles.iconCircle}><Heart size={20} color="var(--color-pine)" /></div>
                        <h3>Understand</h3>
                        <p>Track your<br />emotions</p>
                    </div>
                    <div className={styles.miniFeature}>
                        <div className={styles.iconCircle}><Moon size={20} color="var(--color-pine)" /></div>
                        <h3>Grow</h3>
                        <p>Build better<br />habits</p>
                    </div>
                </div>
            </div>

            <div className={styles.visualContent}>
                <div className={styles.phonesContainer}>
                    <div className={`${styles.phone} ${styles.phoneLeft}`}>
                        <img src="/assets/screenshot-1.png" alt="Aether App Dashboard"
                            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                        <div className={styles.phoneFallback}>Screenshot 1</div>
                    </div>
                    <div className={`${styles.phone} ${styles.phoneRight}`}>
                        <img src="/assets/screenshot-2.png" alt="Aether App Journal"
                            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                        <div className={styles.phoneFallback}>Screenshot 2</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
