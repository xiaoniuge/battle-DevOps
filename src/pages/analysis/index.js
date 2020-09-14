import { Card } from 'antd';
import { useState } from 'react';
import { BaseInfo } from './component';
import styles from './index.scss';

export default (props) => {
  return (
    <>
      <Card bodyStyle={{ borderRadius: 8 }}>
        <div className={styles.baseInfoLayout}>
          <BaseInfo />
        </div>
      </Card>
    </>
  );
};
