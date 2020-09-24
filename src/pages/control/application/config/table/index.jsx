import { Input, Select } from 'antd';

const columnsConfig = [
  {
    title: '应用ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '应用名称',
    dataIndex: 'name',
    key: 'name',
    component: <Input placeholder="请输入" />,
  },
  {
    title: '所属项目',
    dataIndex: 'projectId',
    key: 'projectId',
    component: <Select placeholder="请选择" />,
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
