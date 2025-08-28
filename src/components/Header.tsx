import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo linking to home */}
        <Link to="/" className={styles.logoLink}>
          <span className={styles.logo}>mic</span>
        </Link>

        <nav className={styles.nav}>
          {/* Topics Link - will open topics map */}
          <Link to="/topics" className={styles.navLink}>
            topics
          </Link>
        </nav>

        {/* Language Switcher Component */}
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;