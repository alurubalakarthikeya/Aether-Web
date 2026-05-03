import React from 'react';
import styles from './Features.module.css';
import { BookMarked, HeartHandshake, MoonStar, Sprout } from 'lucide-react';

export default function Features() {
    const features = [
        {
            id: 1,
            icon: <BookMarked size={28} color="var(--color-pine)" />,
            title: 'Journaling',
            description: 'Express your thoughts\nand reflect daily.'
        },
        {
            id: 2,
            icon: <HeartHandshake size={28} color="var(--color-pine)" />,
            title: 'Mood Tracking',
            description: 'Understand your\nemotions better.'
        },
        {
            id: 3,
            icon: <MoonStar size={28} color="var(--color-pine)" />,
            title: 'Dream Recorder',
            description: 'Capture and explore\nyour dreams.'
        },
        {
            id: 4,
            icon: <Sprout size={28} color="var(--color-pine)" />,
            title: 'Growth Journey',
            description: 'Build habits and track\nyour progress.'
        }
    ];

    return (
        <section className={`container ${styles.featuresSection}`} id="features">
            <div className={styles.leftTitle}>
                <div className={styles.label}>✦ FEATURES</div>
                <h2 className={styles.title}>Tools for your<br />mind and soul</h2>
            </div>

            <div className={styles.rightCards}>
                {features.map(feat => (
                    <div key={feat.id} className={styles.card}>
                        <div className={styles.iconWrapper}>
                            {feat.icon}
                        </div>
                        <h3 className={styles.cardTitle}>{feat.title}</h3>
                        <p className={styles.cardDesc}>{feat.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
