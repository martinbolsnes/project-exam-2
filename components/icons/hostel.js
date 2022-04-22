import { Building } from 'tabler-icons-react';
import styles from '../../styles/Home.module.css';

const HostelIcon = () => {
  return (
    <div className={styles.heroIconsBg}>
      <Building size={40} color='#1565C0' strokeWidth={1} />
    </div>
  );
};

export default HostelIcon;
