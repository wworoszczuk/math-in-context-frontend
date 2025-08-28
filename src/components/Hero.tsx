import styles from './Hero.module.css';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'pl' | 'en';

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          {lang === 'pl'
            ? <>Odkrywaj matematykę<br />w realnych kontekstach</>
            : <>Discover math through<br />real-world contexts</>}
        </h1>
        <p className={styles.subtitle}>
          {lang === 'pl'
            ? <>Interaktywne symulacje, które sprawiają, że matematyczne pojęcia są intuicyjne<br />i dostępne bez strasznych symboli czy równań.</>
            : <>Interactive simulations that make mathematical concepts intuitive<br />and accessible without scary symbols or equations.</>}
        </p>
        <div className={styles.ctaButtons}>
          <Link to='/topics'>  
            <button className={styles.primaryButton}>
              {lang === 'pl' ? 'Eksploruj tematy' : 'Explore Topics'}
            </button>
          </Link>
        </div>
      </div>

    <p className={styles.fundingInfo}>
        {lang === 'pl'
        ? 'Zrealizowano ze środów "Mazowiecki program stypendialny dla uczniów szkół zawodowych 2024/2025"'
        : 'Completed with funds from “Mazovian scholarship program for vocational school students 2024/2025”.'}
    </p>
    </section>
  );
};

export default Hero;
