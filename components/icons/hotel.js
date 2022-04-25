import { Tooltip } from '@mantine/core';
import { BuildingSkyscraper } from 'tabler-icons-react';
import styles from '../../styles/Home.module.css';

const HotelIcon = () => {
  return (
    <div className={styles.hotelDiv}>
      <Tooltip
        label='Hotel'
        position='right'
        withArrow
        transitionDuration={220}
        transition='fade'
        gutter={-20}
      >
        <div className={styles.heroIconsBg}>
          <BuildingSkyscraper size={40} color='#1565C0' strokeWidth={1} />
        </div>
      </Tooltip>
    </div>
  );
};

export default HotelIcon;
