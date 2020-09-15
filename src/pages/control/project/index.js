import { useState } from 'react';
import { Form } from 'antd';
import { Table } from '@/component';
import { columnsConfig } from './config';
import ProjectProfile from './component';

export default (props) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerFooterVisible, setDrawerFooterVisible] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState('创建项目');
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <Table
        columns={columnsConfig}
        initialValues={{}}
        needSearch={true}
        needCreate={true}
        needRefresh={true}
        needSetting={true}
        needFullScreen={true}
        needCustomSize={true}
        drawerTitle={drawerTitle}
        drawerVisible={drawerVisible}
        drawerChildren={<ProjectProfile form={form} onFinish={onFinish} />}
        drawerFooterVisible={drawerFooterVisible}
        drawerWidth={600}
        onSearch={(values) => console.log(values)}
        onCreateClick={() => {
          setDrawerVisible(true);
          setDrawerFooterVisible(true);
          setDrawerTitle('创建项目');
        }}
        onOk={() => {
          form.submit();
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
