"use client";
import React from 'react';
import styles from './BentoFeatures.module.css';
import { BookMarked, HeartHandshake, MoonStar, Sprout } from 'lucide-react';

export default function BentoFeatures() {
    return (
        <section className={`container ${styles.bentoSection}`} id="features">
            <div className={styles.sectionHeader}>
                <div className={styles.label}>✦ APP PREVIEW & FEATURES</div>
                <h2 className={styles.headline}>Your journey, beautifully simple.</h2>
            </div>

            <div className={styles.bentoGrid}>
                <div className={`${styles.bentoCard} ${styles.previewSpan}`}>
                    <div className={styles.previewContent}>
                        <div className={`${styles.phone} ${styles.phoneLeft}`}>
                            <img src="/assets/screenshot-1.png" alt="Aether App Dashboard" />
                        </div>
                        <div className={`${styles.phone} ${styles.phoneRight}`}>
                            <img src="/assets/screenshot-2.png" alt="Aether App Journal" />
                        </div>
                    </div>
                </div>

                <div className={styles.bentoCard}>
                    <div className={styles.iconWrapper}><BookMarked size={28} /></div>
                    <h3>Reflect</h3>
                    <p>Express your thoughts and journal daily without pressure.</p>
                </div>

                <div className={styles.bentoCard}>
                    <div className={styles.iconWrapper}><HeartHandshake size={28} /></div>
                    <h3>Understand</h3>
                    <p>Track your emotions deeply to uncover personal patterns.</p>
                </div>

                <div className={styles.bentoCard}>
                    <div className={styles.iconWrapper}><MoonStar size={28} /></div>
                    <h3>Dream Record</h3>
                    <p>Capture and explore the surreal landscapes of your dreams.</p>
                </div>

                <div className={styles.bentoCard}>
                    <div className={styles.iconWrapper}><Sprout size={28} /></div>
                    <h3>Growth</h3>
                    <p>Build healthy habits and see your progress blossom.</p>
                </div>
            </div>
        </section>
    );
}
