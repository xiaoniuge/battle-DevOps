import { Input, Select } from 'antd';

const columnsConfig = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '服务器名称',
    dataIndex: 'name',
    key: 'name',
    component: <Input />,
  },
  {
    title: '服务器类型',
    dataIndex: 'type',
    key: 'type',
    component: <Select />,
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
  },
];

export default columnsConfig;
