import styles from './index.css';

function MainLayout(props) {
  return <div className={styles.normal}>{props.children}</div>;
}

export default MainLayout;
