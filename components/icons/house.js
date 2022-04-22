import { Home } from 'tabler-icons-react';
import styles from '../../styles/Home.module.css';

const HouseIcon = () => {
  return (
    <div className={styles.heroIconsBg}>
      <Home size={40} color='#1565C0' strokeWidth={1} />
    </div>
  );
};

export default HouseIcon;
