import { Table, Row, Space, Divider, Button } from 'antd';
import AdvancedSearchForm from '../AdvancedSearchForm';
import MyIcon from '../MyIcon';

export default ({
  needSearch,
  onSearch,
  initialValues = {},
  needCreate,
  onCreateClick,
  needRefresh,
  onRefresh,
  ...props
}) => {
  const { columns } = props;
  const searchConfigsHandler = () => {
    let configs = [];
    if (!columns || columns.length === 0) {
      return configs;
    } else {
      for (let i = 0; i < columns.length; i++) {
        let item = columns[i];
        configs.push({
          name: item.dataIndex,
          label: item.title,
          component: item.component,
        });
      }
      return configs;
    }
  };
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {columns && columns.length !== 0 && needSearch ? (
        <>
          <AdvancedSearchForm
            configs={searchConfigsHandler()}
            onFinish={onSearch}
            initialValues={initialValues}
          />
          <Divider style={{ margin: '8px 0' }} />
        </>
      ) : null}
      <Row justify="space-between">
        <span></span>
        <Space>
          {needCreate ? (
            <Button
              type="primary"
              icon={
                <MyIcon
                  type="icon-plus"
                  style={{ color: 'white' }}
                  onClick={() => onCreateClick()}
                />
              }
            >
              新建
            </Button>
          ) : null}
          {needRefresh ? (
            <Button icon={<MyIcon type="icon-refresh" />} onClick={() => onRefresh()}></Button>
          ) : null}
        </Space>
      </Row>
      <Table {...props} />
    </Space>
  );
};
