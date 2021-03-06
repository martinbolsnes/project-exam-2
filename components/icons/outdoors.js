import { Tooltip } from '@mantine/core';
import { Tent } from 'tabler-icons-react';
import styles from '../main/Main.module.css';

const OutdoorsIcon = () => {
  return (
    <div className={styles.outdoorsDiv}>
      <a>
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
      </a>
    </div>
  );
};

export default OutdoorsIcon;
