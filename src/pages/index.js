import styles from './index.scss';
import { Form, Input, Button, Checkbox } from 'antd';
import { history } from 'umi';

export default (props) => {
  const onFinish = (values) => {
    console.log(values);
    history.replace('/home');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.normal} style={{ minHeight: window.innerHeight }}>
      <div className={styles.login}>
        <span className={styles.loginTitle}>登 录</span>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="密码" />
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <Button type="primary" htmlType="submit" block>
              登 录
            </Button>
          </Form.Item>
          <div className={styles.footer}>
            <span>忘记密码</span>
            <span>注册</span>
          </div>
        </Form>
      </div>
    </div>
  );
};
