"use client";
import { useLanguage } from '../../context/LanguageContext';

export default function MenuPage() {
  const { t } = useLanguage();

  return (
    <div className="tab-content active" style={{ display: 'block' }}>
        <section className="menu-section">
            <h2>{t('menu_title')}</h2>
            <div className="pdf-container">
                <embed src="/pdf/Brown and Cream Modern Elegant Restaurant Menu.pdf.pdf" type="application/pdf" width="100%" height="800px" />
                <p className="pdf-fallback">
                    <span>{t('menu_fallback_prefix')}</span>
                    <a href="/pdf/Brown and Cream Modern Elegant Restaurant Menu.pdf.pdf" target="_blank" rel="noopener noreferrer">{t('menu_fallback_link')}</a>.
                </p>
            </div>
        </section>
    </div>
  );
}
