import { useState } from 'react';
import { Button, Space, Input } from 'antd';
import { Table, MyIcon } from '@/component';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    component: <Input />,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    component: <Input />,
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    component: <Input />,
  },
  {
    title: '住址',
    dataIndex: 'address1',
    key: 'address1',
    component: <Input />,
  },
  {
    title: '住址',
    dataIndex: 'address2',
    key: 'address2',
    component: <Input />,
  },
];

export default (props) => {
  return (
    <>
      <Table
        columns={columns}
        needSearch={true}
        onSearch={(values) => console.log(values)}
        initialValues={{}}
        needCreate={true}
        needRefresh={true}
      />
    </>
  );
};
