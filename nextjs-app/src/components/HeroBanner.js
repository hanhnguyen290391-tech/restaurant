"use client";
import { useLanguage } from '../context/LanguageContext';

export default function HeroBanner() {
  const { t } = useLanguage();

  return (
    <section className="hero-banner">
        <img src="/ảnh/banner.jpg" alt="Quán ăn Quảng Vị Banner" className="banner-img" />
        <div className="hero-overlay">
            <h1>{t('hero_title')}</h1>
            <p>{t('hero_subtitle')}</p>
        </div>
    </section>
  );
}
