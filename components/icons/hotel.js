import { BuildingSkyscraper } from 'tabler-icons-react';
import styles from '../../styles/Home.module.css';

const HotelIcon = () => {
  return (
    <div className={styles.heroIconsBg}>
      <BuildingSkyscraper size={40} color='#1565C0' strokeWidth={1} />
    </div>
  );
};

export default HotelIcon;
