import React from 'react';
import styles from './Philosophy.module.css';
import { Sprout, Heart, Mountain } from 'lucide-react';

export default function Philosophy() {
    const points = [
        {
            id: 1,
            icon: <Sprout size={40} color="var(--color-pine)" />,
            title: 'Small Steps',
            description: 'Tiny actions every day\ncreate big change.'
        },
        {
            id: 2,
            icon: <Heart size={40} color="var(--color-pine)" />,
            title: 'Self Compassion',
            description: 'Be kind to yourself\nin every moment.'
        },
        {
            id: 3,
            icon: <Mountain size={40} color="var(--color-pine)" />,
            title: 'Consistent Growth',
            description: 'Growth happens when\nyou stay consistent.'
        }
    ];

    return (
        <section className={`container ${styles.philosophySection}`} id="philosophy">
            <div className={styles.header}>
                <div className={styles.label}>✦ OUR PHILOSOPHY</div>
                <h2 className={styles.title}>Small steps.<br />Lasting change.</h2>
                <p className={styles.desc}>
                    You don't need to be perfect.<br />
                    You just need to be consistent.<br />
                    Your pace is enough.
                </p>
            </div>

            <div className={styles.pointsGrid}>
                {points.map(point => (
                    <div key={point.id} className={styles.point}>
                        <div className={styles.iconBox}>
                            {point.icon}
                        </div>
                        <h3 className={styles.pointTitle}>{point.title}</h3>
                        <p className={styles.pointDesc}>{point.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
