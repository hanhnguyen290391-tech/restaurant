"use client";
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
        <p dangerouslySetInnerHTML={{ __html: t('footer_copy') }}></p>
    </footer>
  );
}
