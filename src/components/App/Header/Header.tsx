import styles from './Header.module.css';
import HomeButton from './HomeButton/HomeButton';

export default function Header() {
  return (
    <header className={styles.Header}>
      <h1>Тестовое задание</h1>

      <nav>
        <menu>
          <li>
            <HomeButton />
          </li>
        </menu>
      </nav>
    </header>
  );
}
