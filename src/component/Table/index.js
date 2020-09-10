import { Table, Row, Space, Divider } from 'antd';

export default ({ actions, needSearch, onSearch, ...props }) => {
  const { columns } = props;
  console.log(columns);
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Row justify="space-between">
        <span></span>
        {actions}
      </Row>
      <Table {...props} />
    </Space>
  );
};
