import { Outlet } from 'react-router-dom';
import styles from './AppLayout.module.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';

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
