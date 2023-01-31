import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './AppLayout.module.css';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div className={styles.AppLayout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
