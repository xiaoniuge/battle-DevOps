import { useState } from 'react';
import styles from './index.scss';
import { Form, Input, Button, message, Checkbox } from 'antd';
import { history } from 'umi';
import { MyIcon } from '@/component';

export default (props) => {
  const [usernameStatus, setUsernameStatus] = useState('warning');
  const [passwordStatus, setPasswordStatus] = useState('warning');

  const onFinish = (values) => {
    console.log(values);
    let usernameFlag = true;
    let passwordFlag = true;
    if (!values.username || values.username.trim().length === 0) {
      setUsernameStatus('error');
      usernameFlag = false;
    }
    if (!values.password || values.password.trim().length === 0) {
      setPasswordStatus('error');
      passwordFlag = false;
    }
    if (usernameFlag && passwordFlag) {
      history.replace('/home');
    } else {
      message.error('请输入登录信息！');
      return;
    }
  };

  return (
    <div className={styles.login}>
      <h2 className={styles.loginTitle}>欢迎登录Battle之家</h2>
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
        <div className={styles.inputBox}>
          <Form.Item name="username" hasFeedback validateStatus={usernameStatus}>
            <Input
              placeholder="用户名"
              bordered={false}
              onChange={() => setUsernameStatus('validating')}
              onBlur={() => setUsernameStatus('success')}
              prefix={<MyIcon type={'icon-user'} style={{ color: '#1890ff' }} />}
            />
          </Form.Item>
        </div>
        <div className={styles.inputBox}>
          <Form.Item name="password" hasFeedback validateStatus={passwordStatus}>
            <Input.Password
              placeholder="密码"
              bordered={false}
              onChange={() => setPasswordStatus('validating')}
              onBlur={() => setPasswordStatus('success')}
              prefix={<MyIcon type={'icon-password'} style={{ color: '#1890ff' }} />}
            />
          </Form.Item>
        </div>
        <div className={styles.checkboxBox}>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
        </div>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button type="primary" htmlType="submit" block shape="round">
            登 录
          </Button>
        </Form.Item>
        <div className={styles.footer}>
          <span>忘记密码</span>
          <span>注册</span>
        </div>
      </Form>
    </div>
  );
};
