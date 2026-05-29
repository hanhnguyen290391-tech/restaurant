"use client";
import { useLanguage } from '../../context/LanguageContext';
import { useEffect } from 'react';

export default function ReviewsPage() {
  const { t } = useLanguage();

  useEffect(() => {
    // Load elfsight platform script dynamically
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tab-content active" style={{ display: 'block' }}>
        <section className="reviews-section">
            <h2>{t('reviews_title')}</h2>
            <div className="elfsight-widget-container" style={{ marginTop: '30px', background: 'var(--white)', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div className="elfsight-app-764646f3-17eb-4ae4-9eef-e9e33b6159dd" data-elfsight-app-lazy></div>
            </div>
        </section>
    </div>
  );
}
