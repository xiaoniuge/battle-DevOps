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
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerFooterVisible, setDrawerFooterVisible] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState('创建项目');
  return (
    <>
      <Table
        columns={columns}
        initialValues={{}}
        needSearch={true}
        needCreate={true}
        needRefresh={true}
        needSetting={true}
        needFullScreen={true}
        needCustomSize={true}
        drawerTitle={drawerTitle}
        drawerVisible={drawerVisible}
        drawerChildren={<span>600</span>}
        drawerFooterVisible={drawerFooterVisible}
        drawerWidth={600}
        onSearch={(values) => console.log(values)}
        onCreateClick={() => {
          setDrawerVisible(true);
          setDrawerFooterVisible(true);
          setDrawerTitle('创建项目');
        }}
        onOk={() => {
          setDrawerVisible(false);
          setDrawerTitle('创建项目');
        }}
        onClose={() => {
          setDrawerVisible(false);
          setDrawerTitle('创建项目');
        }}
        onRefresh={() => console.log('onRefresh')}
      />
    </>
  );
};
