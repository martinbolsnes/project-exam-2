import { Tooltip } from '@mantine/core';
import { Building } from 'tabler-icons-react';
import styles from '../../styles/Home.module.css';

const HostelIcon = () => {
  return (
    <div className={styles.hostelDiv}>
      <Tooltip
        label='Hostel'
        position='right'
        withArrow
        transitionDuration={220}
        transition='fade'
        gutter={-20}
      >
        <div className={styles.heroIconsBg}>
          <Building size={40} color='#1565C0' strokeWidth={1} />
        </div>
      </Tooltip>
    </div>
  );
};

export default HostelIcon;
