import { useState } from 'react';
import { Space, Row, Tooltip } from 'antd';
import { Tree } from './component';
import { MyIcon } from '@/component';

export default (props) => {
  const [company, setComany] = useState({ name: '晓菲戈俱乐部' });
  const onCreate = () => {
    console.log('root onCreate');
  };
  return (
    <>
      <Row
        justify="space-between"
        style={{
          height: 40,
          cursor: 'pointer',
          paddingRight: 8,
        }}
      >
        <Space>
          <MyIcon type="icon-company" style={{ color: '#08979c', fontSize: 32 }} />
          <span>{company.name}</span>
        </Space>
        <Space>
          <Tooltip title="创建子节点" destroyTooltipOnHide={{ keepParent: false }}>
            <MyIcon type="icon-plus" onClick={() => onCreate()} />
          </Tooltip>
        </Space>
      </Row>
      <div style={{ position: 'relative', paddingLeft: 32 }}>
        <Tree data={data} />
      </div>
    </>
  );
};

const data = [
  {
    label: '吸烟部门',
    value: 2,
    children: [
      {
        label: '华子组',
        value: 3,
        children: [
          { label: '1小时一根', value: 5, children: null },
          { label: '2小时一根', value: 6, children: null },
        ],
      },
      {
        label: '群子组',
        value: 4,
        children: [
          { label: '1小时一根', value: 7, children: null },
          {
            label: '2小时一根',
            value: 8,
            children: [
              { label: '小哥哥', value: 9, children: null },
              { label: '小姐姐', value: 10, children: null },
              { label: '未知生物', value: 11, children: null },
            ],
          },
        ],
      },
    ],
  },
];
