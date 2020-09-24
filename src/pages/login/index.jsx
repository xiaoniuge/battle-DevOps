import { useState, useEffect, useRef } from 'react';
import { Row } from 'antd';
import styles from './index.scss';
import { LoginBox, LoginLayout } from './component';

export default (props) => {
  return (
    <div className={styles.normal} style={{ minHeight: window.innerHeight }}>
      <LoginLayout title="Battle A bragging statement">
        <div
          style={{
            paddingLeft: 100,
            paddingRight: 100,
            paddingTop: 8,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              flex: '1',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <img src={require('@/assets/login/login.png')} height="320" />
            </div>
            <LoginBox />
          </div>
        </div>
      </LoginLayout>
    </div>
  );
};
