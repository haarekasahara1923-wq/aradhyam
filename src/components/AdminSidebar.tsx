"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./AdminSidebar.module.css";

export default function AdminSidebar({ logoUrl }: { logoUrl?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const closeMenu = () => setMobileOpen(false);

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: "📊" },
    { name: "Gallery", path: "/admin/dashboard/gallery", icon: "🖼️" },
    { name: "Announcements", path: "/admin/dashboard/announcements", icon: "📢" },
    { name: "About Us", path: "/admin/dashboard/about", icon: "👥" },
    { name: "Contact Info", path: "/admin/dashboard/contact", icon: "📞" },
    { name: "Hero Settings", path: "/admin/dashboard/hero", icon: "🖼️" },
    { name: "Settings", path: "/admin/dashboard/settings", icon: "⚙️" },
  ];

  return (
    <>
      <button 
        className={styles.hamburger} 
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? "✕" : "☰"}
      </button>

      <div 
        className={`${styles.overlay} ${mobileOpen ? styles.open : ''}`} 
        onClick={closeMenu}
      />

      <aside className={`${styles.sidebar} ${mobileOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <div style={{ textAlign: 'center', color: '#f97316', marginBottom: '15px' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', lineHeight: '1' }}>आराध्यम्</div>
            <div style={{ fontSize: '0.8rem', fontWeight: '600', letterSpacing: '1px' }}>MULTICULTURAL SCHOOL</div>
          </div>
          <h2>Admin Panel</h2>
        </div>

        <nav className={styles.nav}>
          {menuItems.map(item => (
            <Link 
              key={item.path} 
              href={item.path}
              onClick={closeMenu}
              className={`${styles.link} ${pathname === item.path ? styles.active : ''}`}
            >
              <span>{item.icon}</span> {item.name}
            </Link>
          ))}
        </nav>

        <a
          href="https://schoolpro.wapiflow.site"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.manageSchoolBtn}
        >
          🏫 Manage School
        </a>

        <button onClick={handleLogout} className={styles.logoutBtn}>
          🚪 Logout
        </button>
      </aside>
    </>
  );
}
