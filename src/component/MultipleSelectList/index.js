import { List, Checkbox, Space } from 'antd';
import MyIcon from '../MyIcon';

export default ({ setConfigs, configs = [] }) => {
  const selectHandler = (e, item, index) => {
    let tmp = [...configs];
    item.isShow = e.target.checked;
    tmp[index] = item;
    setConfigs(tmp);
  };

  return (
    <List
      dataSource={configs}
      split={false}
      renderItem={(item, index) => (
        <List.Item key={index}>
          <Space>
            <MyIcon type={'icon-item-prefix'} style={{ fontSize: 12, color: '#595959' }} />
            <Checkbox
              defaultChecked={true}
              onChange={(e) => selectHandler(e, item, index)}
              checked={configs[index].isShow}
            >
              {item.label}
            </Checkbox>
          </Space>
        </List.Item>
      )}
    />
  );
};
