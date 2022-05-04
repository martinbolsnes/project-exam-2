import styles from '../../styles/Home.module.css';

export default function TypeLabel(props) {
  return <h3 className={styles.typeLabel}>{props.type}</h3>;
}
