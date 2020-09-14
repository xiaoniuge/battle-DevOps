import { Input } from 'antd';

const columnsConfig = [
  {
    title: '项目ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '项目名',
    dataIndex: 'name',
    key: 'name',
    component: <Input />,
  },
  {
    title: '项目描述',
    dataIndex: 'description',
    key: 'description',
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
