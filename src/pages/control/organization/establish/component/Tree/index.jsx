import { useEffect, useState } from 'react';
import { Space, Row, Tooltip } from 'antd';
import { Icon } from 'battle-library';

export default ({ data = [], onEdit, onCreate, onDelete }) => {
  const [realData, setRealData] = useState([]);
  const actionsRender = (item) => {
    return item.showActions ? (
      <Space>
        <Tooltip title="编辑" destroyTooltipOnHide={{ keepParent: false }}>
          <Icon type="icon-edit" onClick={() => onEdit(item)} />
        </Tooltip>
        <Tooltip title="创建子节点" destroyTooltipOnHide={{ keepParent: false }}>
          <Icon type="icon-plus" onClick={() => onCreate(item)} />
        </Tooltip>
        <Tooltip title="删除" destroyTooltipOnHide={{ keepParent: false }}>
          <Icon type="icon-delete" onClick={() => onDelete(item)} />
        </Tooltip>
      </Space>
    ) : null;
  };
  const treeNodeRender = (item, isParent) => {
    return (
      <Row
        key={item.value}
        justify="space-between"
        style={{
          background: item.showActions ? '#e6f7ff' : 'transparent',
          height: 40,
          cursor: 'pointer',
          paddingRight: 8,
        }}
        onMouseEnter={() => {
          item.showActions = true;
          setRealData(treeDataHandler(realData, item));
        }}
        onMouseLeave={() => {
          item.showActions = false;
          setRealData(treeDataHandler(realData, item));
        }}
      >
        <Space>
          <Icon
            type={item.icon}
            style={{
              fontSize: 32,
              color: '#13c2c2',
              transform: item.collapsed ? 'rotate(0deg)' : 'rotate(90deg)',
              transitionDuration: '0.5s',
            }}
            onClick={() => {
              item.collapsed = !item.collapsed;
              setRealData(treeDataHandler(realData, item));
            }}
          />
          <span style={{ cursor: 'pointer' }}>{item.label}</span>
        </Space>
        {actionsRender(item)}
      </Row>
    );
  };
  const treeRender = (data) => {
    let tmp = [];
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      if (item.children) {
        tmp.push(
          <div key={item.value}>
            {treeNodeRender(item, true)}
            {!item.collapsed ? (
              <div style={{ position: 'relative', paddingLeft: 32 }}>
                {treeRender(item.children)}
              </div>
            ) : null}
          </div>,
        );
      } else {
        tmp.push(treeNodeRender(item, false));
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
          collapsed:
            current && current.value === item.value
              ? current.collapsed
              : item.collapsed !== undefined && item.collapsed !== null
                ? item.collapsed
                : true,
          children: treeDataHandler(item.children, current),
          icon:
            current && current.value === item.value
              ? current.icon
              : item.icon
                ? item.icon
                : 'icon-arrow-left',
          showActions:
            current && current.value === item.value
              ? current.showActions
              : item.showActions
                ? item.showActions
                : false,
        });
      } else {
        tmp.push({
          label: item.label,
          value: item.value,
          children: null,
          icon: 'icon-dot',
          showActions:
            current && current.value === item.value
              ? current.showActions
              : item.showActions
                ? item.showActions
                : false,
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
      <div>{treeRender(realData)}</div>
    </div>
  );
};
