import { useState } from 'react';
import { Table } from '@/component';
import { columnsConfig } from './config';

export default (props) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerFooterVisible, setDrawerFooterVisible] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState('创建应用');
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
        drawerChildren={<span>600</span>}
        drawerFooterVisible={drawerFooterVisible}
        drawerWidth={600}
        onSearch={(values) => console.log(values)}
        onCreateClick={() => {
          setDrawerVisible(true);
          setDrawerFooterVisible(true);
          setDrawerTitle('创建应用');
        }}
        onOk={() => {
          setDrawerVisible(false);
          setDrawerTitle('创建应用');
        }}
        onClose={() => {
          setDrawerVisible(false);
          setDrawerTitle('创建应用');
        }}
        onRefresh={() => console.log('onRefresh')}
      />
    </>
  );
};
