import React from 'react';
import styles from './Footer.module.css';

const TwitterIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
);

const DiscordIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.996 6.505C14.07 6.082 13.067 5.79 12.012 5.568.125 15.932 1.488 23.36 1.488 23.36c2.404 1.764 4.7 1.838 4.7 1.838l1.045-1.42c-2.072-.613-2.868-1.57-2.868-1.57s.24.168.647.404c1.666 1.002 3.865 1.433 6.068 1.547 2.678.138 5.434-.374 7.556-1.547.45-.25.666-.404.666-.404s-.815.975-2.923 1.588l1.028 1.418s2.296-.074 4.7-1.838c0 0 1.406-7.755-10.512-16.854zm-6.262 10.66c-1.127 0-2.036-1.01-2.036-2.25s.91-2.25 2.036-2.25 2.052 1.018 2.036 2.25c0 1.24-.91 2.25-2.036 2.25zm6.544 0c-1.127 0-2.036-1.01-2.036-2.25s.91-2.25 2.036-2.25 2.052 1.018 2.036 2.25c0 1.24-.91 2.25-2.036 2.25z"></path>
    </svg>
);

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContent}`}>
                <div className={styles.leftCol}>
                    <div className={styles.logo}>AETHER</div>
                    <span className={styles.tagline}>A calm space to reflect, grow and heal.</span>
                </div>

                <div className={styles.rightCol}>
                    <div className={styles.links}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialIcon}><TwitterIcon /></a>
                        <a href="#" className={styles.socialIcon}><DiscordIcon /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
