"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { language, changeLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => pathname === path ? 'active' : '';

  return (
    <header className="navbar">
        <div className="navbar-header">
            <div className="logo">Quảng Vị</div>
            <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle menu">&#9776;</button>
        </div>
        <nav id="navMenu" className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
            <ul className="nav-links">
                <li><Link href="/" className={`tab-link ${isActive('/')}`} onClick={closeMenu}>{t('nav_home')}</Link></li>
                <li><Link href="/thuc-don" className={`tab-link ${isActive('/thuc-don')}`} onClick={closeMenu}>{t('nav_menu')}</Link></li>
                <li><Link href="/danh-gia" className={`tab-link ${isActive('/danh-gia')}`} onClick={closeMenu}>{t('nav_reviews')}</Link></li>
                <li><Link href="/tuyen-dung" className={`tab-link ${isActive('/tuyen-dung')}`} onClick={closeMenu}>{t('nav_recruitment')}</Link></li>
                <li><Link href="/lien-he" className={`tab-link ${isActive('/lien-he')}`} onClick={closeMenu}>{t('nav_contact')}</Link></li>
            </ul>
            <div className="lang-switcher">
                <button onClick={() => changeLanguage('vi')} className={`lang-btn ${language === 'vi' ? 'active' : ''}`}>VN</button>
                <span className="lang-divider">|</span>
                <button onClick={() => changeLanguage('en')} className={`lang-btn ${language === 'en' ? 'active' : ''}`}>EN</button>
            </div>
        </nav>
    </header>
  );
}
