"use client";
import React from 'react';
import styles from './DownloadSteps.module.css';
import { DownloadCloud, ShieldCheck, Sparkles, Download } from 'lucide-react';

export default function DownloadSteps() {
    return (
        <section className={`container ${styles.downloadSection}`} id="download">
            <div className={styles.introLeft}>
                <div className={styles.label}>✦ GET STARTED</div>
                <h2 className={styles.title}>Simple steps to<br />start your journey.</h2>
                <p className={styles.desc}>Download Aether and take the first step towards a better you, today.</p>

                <div className={styles.actionBlock}>
                    <a href="#" className={`btn ${styles.downloadBtn}`}>
                        <Download size={18} className={styles.dlIcon} /> Download APK
                    </a>
                    <div className={styles.versionInfo}>
                        <span>Version 1.0.0 — 25.4 MB</span>
                        <span className={styles.comingSoon}>Play Store release coming soon!</span>
                    </div>
                </div>
            </div>

            <div className={styles.stepsRight}>
                <div className={styles.stepCard}>
                    <div className={styles.stepIcon}><DownloadCloud size={24} /></div>
                    <div className={styles.stepDetails}>
                        <span className={styles.stepNum}>01</span>
                        <h4>Download APK</h4>
                        <p>Get the latest version securely.</p>
                    </div>
                </div>

                <div className={styles.stepCard}>
                    <div className={styles.stepIcon}><ShieldCheck size={24} /></div>
                    <div className={styles.stepDetails}>
                        <span className={styles.stepNum}>02</span>
                        <h4>Allow Installation</h4>
                        <p>Enable unknown sources in your settings.</p>
                    </div>
                </div>

                <div className={styles.stepCard}>
                    <div className={styles.stepIcon}><Sparkles size={24} /></div>
                    <div className={styles.stepDetails}>
                        <span className={styles.stepNum}>03</span>
                        <h4>Install & Open</h4>
                        <p>Install Aether and begin your journey.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
