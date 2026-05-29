"use client";
import { useLanguage } from '../context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="tab-content active" style={{ display: 'block' }}>
        <section className="intro-section">
            <h2>{t('intro_title')}</h2>
            <p dangerouslySetInnerHTML={{ __html: t('intro_content') }}></p>
        </section>
        
        <section className="gallery-section">
            <h3>{t('gallery_title')}</h3>
            <div className="food-gallery">
                <div className="food-card">
                    <img src="/ảnh/myquang.jpg" alt="Mì Quảng" />
                    <h4>{t('food_myquang')}</h4>
                </div>
                <div className="food-card">
                    <img src="/ảnh/myquang1.jpg" alt="Mì Quảng Tôm Thịt" />
                    <h4>{t('food_myquang1')}</h4>
                </div>
                <div className="food-card">
                    <img src="/ảnh/bunmoc.png" alt="Bún Mọc" />
                    <h4>{t('food_bunmoc')}</h4>
                </div>
                <div className="food-card">
                    <img src="/ảnh/bunmamnem.png" alt="Bún Mắm Nêm" />
                    <h4>{t('food_bunmamnem')}</h4>
                </div>
                <div className="food-card">
                    <img src="/ảnh/comga.jpg" alt="Cơm Gà" />
                    <h4>{t('food_comga')}</h4>
                </div>
            </div>
        </section>
    </div>
  );
}
