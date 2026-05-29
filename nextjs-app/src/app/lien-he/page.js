"use client";
import { useLanguage } from '../../context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="tab-content active" style={{ display: 'block' }}>
        <section className="contact-section">
            <h2>{t('contact_title')}</h2>
            <div className="contact-layout">
                <div className="contact-info">
                    <h3>{t('contact_info_title')}</h3>
                    <p><strong>{t('contact_address_label')}</strong> 123 Đường Ẩm Thực, Quận 1, TP. Hồ Chí Minh</p>
                    <p><strong>{t('contact_phone_label')}</strong> 0909 123 456</p>
                    <p><strong>{t('contact_hours_label')}</strong> <span>{t('contact_hours_value')}</span></p>
                    <p><strong>{t('contact_email_label')}</strong> lienhe@quangvi.vn</p>
                </div>
                <div className="contact-form">
                    <h3>{t('contact_form_title')}</h3>
                    <form onSubmit={(e) => { e.preventDefault(); alert('Cảm ơn bạn đã liên hệ!'); }}>
                        <input type="text" placeholder={t('contact_name_placeholder')} required />
                        <input type="email" placeholder={t('contact_email_placeholder')} required />
                        <textarea rows="4" placeholder={t('contact_message_placeholder')} required></textarea>
                        <button type="submit" className="submit-btn">{t('contact_submit')}</button>
                    </form>
                </div>
            </div>
            <div className="map-container" style={{ marginTop: '30px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8846287534143!2d106.73094647458369!3d10.743374289403391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525003fead4df%3A0xb5a352929c619e38!2zUXXhuqNuZyBW4buL!5e0!3m2!1svi!2s!4v1778648309345!5m2!1svi!2s" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    </div>
  );
}
