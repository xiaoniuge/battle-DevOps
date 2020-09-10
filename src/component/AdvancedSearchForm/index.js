import { useState } from 'react';
import { Form, Button, Row, Col, Space } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const rowCols = 4;

export default ({ configs, initialValues, onFinish }) => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const renderFormItem = () => {
    const size = configs.length;
    const length = expand ? size : size >= rowCols ? rowCols : size;
    const children = [];
    for (let i = 0; i < length; i++) {
      let item = configs[i];
      children.push(
        <Col span={24 / rowCols} key={i}>
          <Form.Item name={item.name} label={item.label}>
            {item.component}
          </Form.Item>
        </Col>,
      );
    }
    let span = (24 / rowCols) * (rowCols - (length % rowCols));
    children.push(
      <Col span={span} style={{ textAlign: 'right' }} key={length}>
        <Space>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button onClick={() => form.resetFields()}>重置</Button>
          {configs.length > rowCols ? (
            <a style={{ fontSize: 12 }} onClick={() => setExpand(!expand)}>
              {expand ? <UpOutlined /> : <DownOutlined />} {expand ? '收起' : '展开'}
            </a>
          ) : null}
        </Space>
      </Col>,
    );
    return children;
  };

  return configs && configs.length !== 0 ? (
    <Form form={form} initialValues={initialValues} onFinish={onFinish}>
      <Row gutter={24}>{renderFormItem()}</Row>
    </Form>
  ) : null;
};
