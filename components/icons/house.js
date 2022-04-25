import { Tooltip } from '@mantine/core';
import { Home } from 'tabler-icons-react';
import styles from '../../styles/Home.module.css';

const HouseIcon = () => {
  return (
    <div className={styles.houseDiv}>
      <Tooltip
        label='House'
        position='right'
        withArrow
        transitionDuration={220}
        transition='fade'
        gutter={-20}
      >
        <div className={styles.heroIconsBg}>
          <Home size={40} color='#1565C0' strokeWidth={1} />
        </div>
      </Tooltip>
    </div>
  );
};

export default HouseIcon;
