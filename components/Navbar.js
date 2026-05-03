"use client";
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Download, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.navWrapper}>
            <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
                <div className={styles.logo}>AETHER</div>

                <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
                    <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
                    <a href="#download" onClick={() => setIsOpen(false)}>Download</a>
                    <a href="#philosophy" onClick={() => setIsOpen(false)}>Philosophy</a>

                    <a href="#download" className={`btn btn-primary ${styles.mobileNavBtn}`} onClick={() => setIsOpen(false)}>
                        <Download size={16} className={styles.dlIcon} /> Download APK
                    </a>
                </div>

                <div className={styles.actions}>
                    <a href="#download" className={`btn btn-primary ${styles.desktopNavBtn}`}>
                        <Download size={16} className={styles.dlIcon} /> Download APK
                    </a>

                    <button className={styles.mobileMenu} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} color="var(--color-pine)" /> : <Menu size={24} color="var(--color-pine)" />}
                    </button>
                </div>
            </nav>
        </div>
    );
}
