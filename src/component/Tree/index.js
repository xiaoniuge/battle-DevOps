import { useEffect, useState } from 'react';
import { Space, Button, Checkbox } from 'antd';
import MyIcon from '../MyIcon';

export default ({ data = [], checkable, selectKeys = [], ...props }) => {
  const [realData, setRealData] = useState([]);
  const [realSelectKeys, setRealSelectKeys] = useState(selectKeys);
  const treeRender = (data, count) => {
    let tmp = [];
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      if (item.children) {
        tmp.push(
          <div key={item.value}>
            <Space style={{ background: 'blue', width: '100%' }}>
              <MyIcon
                type={item.icon}
                style={{ fontSize: 16 }}
                onClick={() => {
                  item.collapsed = !item.collapsed;
                  item.icon = item.collapsed ? 'icon-arrow-left' : 'icon-arrow-down';
                  setRealData(treeDataHandler(realData, item));
                }}
              />
              {/* {checkable ? <Checkbox checked={item.checked}/> : null} */}
              <span
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => {
                  console.log(item);
                }}
                onMouseLeave={() => {
                  console.log(1, item);
                }}
              >
                {item.label}
              </span>
            </Space>
            {!item.collapsed ? (
              <div style={{ marginLeft: 32 * count }}>{treeRender(item.children, count++)}</div>
            ) : null}
          </div>,
        );
      } else {
        tmp.push(
          <div key={item.value}>
            <Space>
              <MyIcon type={item.icon} style={{ fontSize: 16, color: 'transparent' }} />
              {/* {checkable ? <Checkbox checked={item.checked}/> : null} */}
              <span style={{ cursor: 'pointer' }}>{item.label}</span>
            </Space>
          </div>,
        );
      }
    }
    return tmp;
  };
  const treeDataHandler = (data, current) => {
    let tmp = [];
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      if (item.children) {
        tmp.push({
          label: item.label,
          value: item.value,
          collapsed: current && current.value === item.value ? current.collapsed : item.collapsed,
          children: treeDataHandler(item.children, current),
          icon:
            current && current.value === item.value
              ? current.icon
              : item.icon
              ? item.icon
              : 'icon-arrow-down',
        });
      } else {
        tmp.push({
          label: item.label,
          value: item.value,
          children: null,
          icon: 'icon-dot',
        });
      }
    }
    return tmp;
  };
  useEffect(() => {
    setRealData(treeDataHandler(data, null));
  }, []);
  return (
    <div>
      <div>{treeRender(realData, 1)}</div>
    </div>
  );
};
