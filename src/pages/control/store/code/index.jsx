import { useState } from 'react';
import { Form } from 'antd';
import { TablePro } from 'battle-library';
import { columnsConfig } from './config';

export default (props) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerFooterVisible, setDrawerFooterVisible] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState('创建服务器信息');
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <TablePro
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
        drawerChildren={<span>hahha</span>}
        drawerFooterVisible={drawerFooterVisible}
        drawerWidth={600}
        onSearch={(values) => console.log(values)}
        onCreateButtonClick={() => {
          setDrawerVisible(true);
          setDrawerFooterVisible(true);
          setDrawerTitle('创建服务器信息');
        }}
        onOk={() => {
          form.submit();
          setDrawerVisible(false);
          setDrawerTitle('创建服务器信息');
        }}
        onClose={() => {
          setDrawerVisible(false);
          setDrawerTitle('创建服务器信息');
        }}
        onRefresh={() => console.log('onRefresh')}
      />
    </>
  );
};
