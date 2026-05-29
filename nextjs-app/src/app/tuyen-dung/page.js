"use client";
import { useLanguage } from '../../context/LanguageContext';

export default function RecruitmentPage() {
  const { t } = useLanguage();

  return (
    <div className="tab-content active" style={{ display: 'block' }}>
        <section className="recruitment-section" style={{ padding: '40px 20px', backgroundColor: 'var(--light-bg, #fcfcfc)' }}>
            <div className="recruitment-container" style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', maxWidth: '1100px', margin: '0 auto', background: 'var(--white, #fff)', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', flexWrap: 'wrap' }}>
                <div className="recruitment-image" style={{ flex: 1, minWidth: '300px' }}>
                    <img src="/ảnh/tuyendung.jpg" alt={t('nav_recruitment')} style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} />
                </div>
                <div className="recruitment-content" style={{ flex: 1.5, minWidth: '300px', textAlign: 'left' }}>
                    <h2 style={{ color: 'var(--primary-color, #c8102e)', marginBottom: '25px', fontSize: '2rem', borderBottom: '2px solid var(--accent-color, #f39c12)', paddingBottom: '10px', display: 'inline-block' }}>{t('recruitment_title')}</h2>
                    
                    <h3 style={{ color: 'var(--secondary-color, #2c3e50)', marginTop: '20px', fontSize: '1.3rem' }}>{t('req_title')}</h3>
                    <ul style={{ listStyleType: 'none', marginLeft: 0, marginBottom: '20px', color: 'var(--text-color, #333)', lineHeight: 1.8 }}>
                        <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent-color, #f39c12)' }}>•</span> 𝖭𝖺𝗆/𝖭𝗎̛̃ 𝗍𝗎̛̀ 𝟣𝟪 – 𝟥𝟢 𝗍𝗎𝗈̂̉𝗂 (𝖴̛𝗎 𝗍𝗂𝖾̂𝗇 𝖭𝖺𝗆)</li>
                        <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent-color, #f39c12)' }}>•</span> 𝖭𝗁𝖺𝗇𝗁 𝗇𝗁𝖾̣𝗇, 𝗍𝗋𝗎𝗇𝗀 𝗍𝗁𝗎̛̣𝖼, 𝖼𝗈́ 𝗍𝗋𝖺́𝖼𝗁 𝗇𝗁𝗂𝖾̣̂𝗆 𝗍𝗋𝗈𝗇𝗀 𝖼𝗈̂𝗇𝗀 𝗏𝗂𝖾̣̂𝖼</li>
                        <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent-color, #f39c12)' }}>•</span> 𝖦𝗂𝖺𝗈 𝗍𝗂𝖾̂́𝗉 𝗍𝗈̂́𝗍, 𝗍𝗁𝖺́𝗂 đ𝗈̣̂ 𝗏𝗎𝗂 𝗏𝖾̉, 𝗅𝗂̣𝖼𝗁 𝗌𝗎̛̣ 𝗏𝗈̛́𝗂 𝗄𝗁𝖺́𝖼𝗁</li>
                        <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent-color, #f39c12)' }}>•</span> 𝖪𝗁𝗈̂𝗇𝗀 𝗒𝖾̂𝗎 𝖼𝖺̂̀𝗎 𝗄𝗂𝗇𝗁 𝗇𝗀𝗁𝗂𝖾̣̂𝗆, 𝗌𝖾̃ đ𝗎̛𝗈̛̣𝖼 𝗁𝗎̛𝗈̛́𝗇𝗀 𝖽𝖺̂̃𝗇</li>
                    </ul>

                    <h3 style={{ color: 'var(--secondary-color, #2c3e50)', marginTop: '20px', fontSize: '1.3rem' }}>{t('job_title')}</h3>
                    <ul style={{ listStyleType: 'none', marginLeft: 0, marginBottom: '20px', color: 'var(--text-color, #333)', lineHeight: 1.8 }}>
                        <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent-color, #f39c12)' }}>•</span> Đ𝗈́𝗇 𝗄𝗁𝖺́𝖼𝗁, 𝗀𝗁𝗂 𝗈𝗋𝖽𝖾𝗋, 𝗉𝗁𝗎̣𝖼 𝗏𝗎̣ 𝗆𝗈́𝗇</li>
                        <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent-color, #f39c12)' }}>•</span> 𝖣𝗈̣𝗇 𝖽𝖾̣𝗉, 𝗀𝗂𝗎̛̃ 𝗏𝖾̣̂ 𝗌𝗂𝗇𝗁 𝗄𝗁𝗎 𝗏𝗎̛̣𝖼 𝗅𝖺̀𝗆 𝗏𝗂𝖾̣̂𝖼</li>
                        <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent-color, #f39c12)' }}>•</span> 𝖧𝗈̂̃ 𝗍𝗋𝗈̛̣ 𝖼𝖺́𝖼 𝖼𝗈̂𝗇𝗀 𝗏𝗂𝖾̣̂𝖼 𝗄𝗁𝖺́𝖼 𝗍𝗁𝖾𝗈 𝗌𝖺̆́𝗉 𝗑𝖾̂́𝗉</li>
                    </ul>

                    <h3 style={{ color: 'var(--secondary-color, #2c3e50)', marginTop: '20px', fontSize: '1.3rem' }}>{t('ben_title')}</h3>
                    <ul style={{ listStyleType: 'none', marginLeft: 0, marginBottom: '20px', color: 'var(--text-color, #333)', lineHeight: 1.8 }}>
                        <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent-color, #f39c12)' }}>•</span> 𝖫𝗎̛𝗈̛𝗇𝗀 + 𝗍𝗁𝗎̛𝗈̛̉𝗇𝗀 + 𝗍𝗂𝗉</li>
                        <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent-color, #f39c12)' }}>•</span> 𝖬𝗈̂𝗂 𝗍𝗋𝗎̛𝗈̛̀𝗇𝗀 𝗅𝖺̀𝗆 𝗏𝗂𝖾̣̂𝖼 𝗍𝗁𝗈𝖺̉𝗂 𝗆𝖺́𝗂, đ𝗈̂̀𝗇𝗀 𝗇𝗀𝗁𝗂𝖾̣̂𝗉 𝖽𝖾̂̃ 𝗍𝗁𝗎̛𝗈̛𝗇𝗀</li>
                        <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent-color, #f39c12)' }}>•</span> 𝖷𝖾́𝗍 𝗍𝖺̆𝗇𝗀 𝗅𝗎̛𝗈̛𝗇𝗀 𝗇𝖾̂́𝗎 𝗅𝖺̀𝗆 𝗍𝗈̂́𝗍</li>
                    </ul>

                    <h3 style={{ color: 'var(--secondary-color, #2c3e50)', marginTop: '20px', fontSize: '1.3rem' }}>{t('time_title')}</h3>
                    <ul style={{ listStyleType: 'none', marginLeft: 0, marginBottom: '25px', color: 'var(--text-color, #333)', lineHeight: 1.8 }}>
                        <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent-color, #f39c12)' }}>•</span> 𝖢𝖺 𝗌𝖺́𝗇𝗀: 𝟨𝗁-𝟣𝟧𝗁 (𝟤𝟧𝗄/𝗁)</li>
                        <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent-color, #f39c12)' }}>•</span> 𝖢𝖺 𝖼𝗁𝗂𝖾̂̀𝗎: 𝟣𝟩𝗁-𝟤𝟣𝗁 (𝟤𝟧𝗄/𝗁)</li>
                    </ul>

                    <div style={{ background: 'var(--light-bg, #fcfcfc)', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--accent-color, #f39c12)' }}>
                        <p style={{ color: 'var(--text-color, #333)', lineHeight: 1.6, fontSize: '1.1rem', marginBottom: '10px' }}><strong>{t('address_label')}</strong> 𝟪𝟨 𝖳𝗋𝖺̂̀𝗇 𝖳𝗋𝗈̣𝗇𝗀 𝖢𝗎𝗇𝗀, 𝗉𝗁𝗎̛𝗈̛̀𝗇𝗀 𝖳𝖺̂𝗇 𝖳𝗁𝗎𝖺̣̂𝗇, 𝖧𝖢𝖬</p>
                        <p style={{ color: 'var(--text-color, #333)', lineHeight: 1.6, fontSize: '1.1rem' }}><strong>{t('contact_label')}</strong> <a href="tel:0971410468" style={{ color: 'var(--primary-color, #c8102e)', fontWeight: 'bold', textDecoration: 'none' }}>𝟢𝟫𝟩.𝟣𝟦𝟣.𝟢𝟦𝟨𝟪 (𝑴𝒔.𝑻𝒉𝒂𝒐)</a> đ𝒆̂̉ 𝒕𝒓𝒂𝒐 đ𝒐̂̉𝒊 𝒄𝒉𝒊 𝒕𝒊𝒆̂́𝒕 𝒑𝒉𝒐̉𝒏𝒈 𝒗𝒂̂́𝒏.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
