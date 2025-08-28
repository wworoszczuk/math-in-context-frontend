import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

// Definiujemy dostępne języki
type Language = 'pl' | 'en';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;

  const switchLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    console.log('Language changed to:', lang);
  };

  return (
    <div className={styles.languageSwitcher}>
      <button
        onClick={() => switchLanguage('pl')}
        className={`${styles.langButton} ${language === 'pl' ? styles.active : ''}`}
      >
        pl
      </button>
      <span className={styles.separator}>/</span>
      <button
        onClick={() => switchLanguage('en')}
        className={`${styles.langButton} ${language === 'en' ? styles.active : ''}`}
      >
        en
      </button>
    </div>
  );
};

export default LanguageSwitcher;