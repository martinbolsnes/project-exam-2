import { Tooltip } from '@mantine/core';
import { Tent } from 'tabler-icons-react';
import styles from '../../styles/Home.module.css';

const OutdoorsIcon = () => {
  return (
    <div className={styles.outdoorsDiv}>
      <Tooltip
        label='Outdoors'
        position='right'
        withArrow
        transitionDuration={220}
        transition='fade'
        gutter={-20}
      >
        <div className={styles.heroIconsBg}>
          <Tent size={40} color='#1565C0' strokeWidth={1} />
        </div>
      </Tooltip>
    </div>
  );
};

export default OutdoorsIcon;
