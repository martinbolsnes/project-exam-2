import { AdjustmentsHorizontal } from 'tabler-icons-react';
import styles from '../../styles/Home.module.css';

export default function FilterButton() {
  return (
    <div className={styles.filterBtnBg}>
      <AdjustmentsHorizontal size={30} color='#1565C0' strokeWidth={1} />
    </div>
  );
}
