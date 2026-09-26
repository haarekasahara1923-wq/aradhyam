"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  phone?: string;
  schoolName?: string;
  logoUrl?: string;
}

export default function Header({ 
  phone = "+919584700400", 
  schoolName = "Aradhyam Multi Cultural School",
  logoUrl 
}: HeaderProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoContainer} onClick={closeMenu}>
        <div style={{ display: 'flex', flexDirection: 'column', color: '#f97316' }}>
          <span style={{ fontSize: '1.8rem', fontWeight: 'bold', lineHeight: '1' }}>आराध्यम्</span>
          <span style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '1px' }}>MULTICULTURAL SCHOOL</span>
        </div>

      </Link>

      <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            href={link.path}
            onClick={closeMenu}
            className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className={styles.headerRight}>
        <a href={`tel:${phone}`} className={styles.callButton}>
          📞 <span className={styles.callText}>Call Now</span>
        </a>
        <button 
          className={styles.hamburger} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

