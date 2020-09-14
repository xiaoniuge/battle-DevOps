import { Card } from 'antd';
import { BaseInfo, DatabaseServerUseInfo } from './component';
import styles from './index.scss';

export default (props) => {
  return (
    <>
      <Card bodyStyle={{ borderRadius: 8 }}>
        <div className={styles.baseInfoLayout}>
          <BaseInfo />
        </div>
      </Card>
      <Card
        title="数据量（万）"
        bodyStyle={{ borderRadius: 8 }}
        className={styles.databaseServerUseInfoLayout}
      >
        <DatabaseServerUseInfo />
      </Card>
    </>
  );
};
