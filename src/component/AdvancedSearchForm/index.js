import { useState } from 'react';
import { Form, Button, Row, Col, Space } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const rowCols = 4;

export default ({ configs, initialValues, onFinish }) => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const renderFormItem = () => {
    let tmp = [];
    for (let i = 0; i < configs.length; i++) {
      if (configs[i].isShow) {
        tmp.push(configs[i]);
      }
    }
    const size = tmp.length;
    const length = expand ? size : size >= rowCols ? rowCols : size;
    const children = [];
    for (let i = 0; i < length; i++) {
      let item = tmp[i];
      children.push(
        <Col span={24 / rowCols} key={i}>
          <Form.Item name={item.name} label={item.label}>
            {item.component}
          </Form.Item>
        </Col>,
      );
    }
    let span = (24 / rowCols) * (rowCols - (length % rowCols));
    if (length !== 0)
      children.push(
        <Col span={span} style={{ textAlign: 'right' }} key={length}>
          <Space>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button onClick={() => form.resetFields()}>重置</Button>
            {tmp.length > rowCols ? (
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
    <div style={{ paddingRight: 16, paddingLeft: 16 }}>
      <Form form={form} initialValues={initialValues} onFinish={onFinish}>
        <Row gutter={24}>{renderFormItem()}</Row>
      </Form>
    </div>
  ) : null;
};
