import Link from "next/link";
import styles from "./Footer.module.css";

interface FooterProps {
  schoolName?: string;
  tagline?: string;
  address?: string;
  phone?: string;
  email?: string;
  logoUrl?: string;
}

export default function Footer({
  schoolName = "Aradhyam Multi Cultural School",
  tagline = "Empowering Minds · Shaping Futures · Building Leaders",
  address = "Gulabpuri, Badagaon, Morar, Gwalior",
  phone = "+919584700400",
  email = "aradhyam@gmail.com",
  logoUrl,
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
            <div style={{ display: 'flex', flexDirection: 'column', color: '#f97316' }}>
              <span style={{ fontSize: '2.2rem', fontWeight: 'bold', lineHeight: '1' }}>आराध्यम्</span>
              <span style={{ fontSize: '0.9rem', fontWeight: '600', letterSpacing: '1px' }}>MULTICULTURAL SCHOOL</span>
            </div>

          </div>
          <p className={styles.footerText}>{tagline}</p>
        </div>
        
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/about" className={styles.footerLink}>About Us</Link></li>
            <li><Link href="/gallery" className={styles.footerLink}>Gallery</Link></li>
            <li><Link href="/contact" className={styles.footerLink}>Contact Us</Link></li>
            <li><Link href="/admin/login" className={styles.footerLink}>Admin Login</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Contact</h3>
          <p className={styles.footerText}>
            📍 {address}<br />
            📞 {phone}<br />
            ✉️ {email}
          </p>
        </div>
      </div>
      
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} {schoolName}. All rights reserved.
      </div>
    </footer>
  );
}

