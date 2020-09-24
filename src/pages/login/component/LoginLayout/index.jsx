import { useState, useEffect } from 'react';
import styles from './index.scss';

const barStyle = {
  background: 'white',
  height: 30,
  position: 'relative',
};

const barRightRadiusStyle = {
  borderTopRightRadius: 15,
  borderBottomRightRadius: 15,
};

const barLeftRadiusStyle = {
  borderTopLeftRadius: 15,
  borderBottomLeftRadius: 15,
};

export default ({ title, ...props }) => {
  const [loginLayoutStyle, setLoginLayoutStyle] = useState(null);
  useEffect(() => {
    let tmp = {
      width: 1000,
      height: 675,
    };
    setLoginLayoutStyle(tmp);
  }, []);
  return (
    <div className={styles.loginLayout} style={loginLayoutStyle ? loginLayoutStyle : null}>
      <div
        style={{
          ...barStyle,
          ...barRightRadiusStyle,
          width: 60,
          left: loginLayoutStyle ? loginLayoutStyle.width : 0,
          top: 50,
        }}
      >
        <h2
          style={{
            fontWeight: 'bolder',
            marginLeft: -(loginLayoutStyle ? loginLayoutStyle.width - 60 : 0),
          }}
        >
          {title}
        </h2>
      </div>
      <div
        style={{
          ...barStyle,
          ...barLeftRadiusStyle,
          width: 60,
          background: '#001529',
          left: loginLayoutStyle ? loginLayoutStyle.width - 60 : 0,
          top: 50,
        }}
      ></div>
      <div
        style={{
          ...barStyle,
          ...barRightRadiusStyle,
          width: 35,
          left: loginLayoutStyle ? loginLayoutStyle.width : 0,
          top: 50,
        }}
      ></div>
      <div
        style={{
          ...barStyle,
          ...barLeftRadiusStyle,
          width: 60,
          left: -60,
          top: loginLayoutStyle ? loginLayoutStyle.height - 250 : 0,
        }}
      >
        <div
          style={{
            background: 'white',
            width: 30,
            height: 30,
            borderRadius: 15,
            marginLeft: -35,
          }}
        ></div>
      </div>
      <div
        style={{
          ...barStyle,
          ...barRightRadiusStyle,
          width: 60,
          left: 0,
          background: '#001529',
          top: loginLayoutStyle ? loginLayoutStyle.height - 250 : 0,
        }}
      ></div>
      <div
        style={{
          ...barStyle,
          ...barLeftRadiusStyle,
          width: 35,
          left: -35,
          top: loginLayoutStyle ? loginLayoutStyle.height - 250 : 0,
        }}
      ></div>
      {props.children}
    </div>
  );
};
