import styles from '../../styles/Home.module.css';

export default function SearchInput() {
  return (
    <>
      <div className={styles.inputDiv}>
        <input
          type='search'
          placeholder='Search...'
          className={styles.searchInput}
        ></input>
      </div>
    </>
  );
}
