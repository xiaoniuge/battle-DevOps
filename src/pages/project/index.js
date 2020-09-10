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
];

export default (props) => {
  return (
    <>
      <Table
        columns={columns}
        actions={
          <Space>
            <Button type="primary" icon={<MyIcon type="icon-plus" style={{ color: 'white' }} />}>
              新建
            </Button>
            <Button icon={<MyIcon type="icon-refresh" />}></Button>
          </Space>
        }
      />
    </>
  );
};
