import { useState, useEffect, useRef } from 'react';
import { Table, Row, Space, Divider, Button, Tooltip, Popover, Checkbox, Drawer } from 'antd';
import AdvancedSearchForm from '../AdvancedSearchForm';
import MyIcon from '../MyIcon';
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
  ColumnHeightOutlined,
} from '@ant-design/icons';
import MultipleSelectList from '../MultipleSelectList';

const actionIconStyle = { fontSize: 20, color: '#595959', cursor: 'pointer' };

const tableSizes = [
  {
    code: 'default',
    name: '默认',
  },
  {
    code: 'middle',
    name: '中等',
  },
  {
    code: 'small',
    name: '紧凑',
  },
];

export default ({
  needSearch,
  onSearch,
  initialValues = {},
  needCreate,
  onCreateClick,
  onOk,
  onClose,
  drawerTitle,
  drawerChildren,
  drawerWidth,
  drawerVisible,
  drawerFooterVisible,
  needRefresh,
  onRefresh,
  needSetting,
  needFullScreen,
  needCustomSize,
  ...props
}) => {
  const { columns } = props;
  const [configs, setConfigs] = useState([]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [customSizeVisible, setCustomSizeVisible] = useState(false);
  const [tableSize, setTableSize] = useState('default');
  const container = useRef();
  const customSizeContainer = useRef();
  const customSizeTooltipContainer = useRef();
  const searchSettingContainer = useRef();
  const searchSettingTooltipContainer = useRef();
  const refreshContainer = useRef();
  const fullScreenContainer = useRef();
  const searchConfigsHandler = (isShow) => {
    let configs = [];
    if (columns && columns.length !== 0) {
      for (let i = 0; i < columns.length; i++) {
        let item = columns[i];
        if (item.component)
          configs.push({
            name: item.dataIndex,
            label: item.title,
            component: item.component,
            isShow: isShow,
          });
      }
    }
    setConfigs(configs);
  };
  const fullScreenHandler = () => {
    if (document.fullscreenElement) {
      exitFullscreen();
    } else {
      requestFullScreen();
    }
  };
  const requestFullScreen = () => {
    const dom = container.current;
    if (dom.requestFullscreen) dom.requestFullscreen();
    else if (dom.mozRequestFullScreen) dom.mozRequestFullScreen();
    else if (dom.webkitRequestFullScreen) dom.webkitRequestFullScreen();
  };
  const exitFullscreen = () => {
    const dom = document;
    if (dom.exitFullscreen) dom.exitFullscreen();
    else if (dom.mozCancelFullScreen) dom.mozCancelFullScreen();
    else if (dom.webkitCancelFullScreen) dom.webkitCancelFullScreen();
  };
  const watchFullScreen = () => {
    document.addEventListener('webkitfullscreenchange', () => setIsFullScreen((c) => !c), false);
    document.addEventListener('mozfullscreenchange', () => setIsFullScreen((c) => !c), false);
    document.addEventListener('fullscreenchange', () => setIsFullScreen((c) => !c), false);
  };
  const removeFullScreen = () => {
    document.removeEventListener('webkitfullscreenchange', () => setIsFullScreen((c) => !c), false);
    document.removeEventListener('mozfullscreenchange', () => setIsFullScreen((c) => !c), false);
    document.removeEventListener('fullscreenchange', () => setIsFullScreen((c) => !c), false);
  };
  useEffect(() => {
    searchConfigsHandler(true);
  }, []);
  useEffect(() => {
    watchFullScreen();
    return () => removeFullScreen();
  }, []);
  return (
    <div style={{ background: '#ffffff', padding: isFullScreen ? '16px' : '0px' }} ref={container}>
      <Space direction="vertical" style={{ width: '100%' }}>
        {columns && columns.length !== 0 && needSearch ? (
          <>
            <AdvancedSearchForm
              configs={configs}
              onFinish={onSearch}
              initialValues={initialValues}
            />
            <Divider style={{ margin: '8px 0' }} />
          </>
        ) : null}
        <Row justify="space-between" style={{ paddingRight: 16, paddingLeft: 16 }}>
          <span></span>
          <Space size={16}>
            {needCreate ? (
              <Button
                type="primary"
                icon={<MyIcon type="icon-plus" style={{ color: 'white' }} />}
                onClick={() => onCreateClick()}
              >
                新建
              </Button>
            ) : null}
            {needRefresh || needSetting ? (
              <Divider type="vertical" style={{ margin: '16px 0' }} />
            ) : null}
            {needRefresh ? (
              <Tooltip
                title="刷新"
                destroyTooltipOnHide={{ keepParent: false }}
                getPopupContainer={() => refreshContainer.current}
              >
                <MyIcon
                  type="icon-refresh"
                  style={actionIconStyle}
                  onClick={() => onRefresh()}
                  ref={refreshContainer}
                />
              </Tooltip>
            ) : null}
            {needCustomSize ? (
              <Popover
                placement="bottom"
                destroyTooltipOnHide={{ keepParent: false }}
                trigger="click"
                getPopupContainer={() => customSizeContainer.current}
                visible={customSizeVisible}
                onVisibleChange={(visible) => setCustomSizeVisible(visible)}
                content={
                  <Space direction="vertical">
                    {tableSizes.map((item, index) => (
                      <span
                        key={index}
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          setTableSize(item.code);
                          setCustomSizeVisible(false);
                        }}
                      >
                        {item.name}
                      </span>
                    ))}
                  </Space>
                }
              >
                <Tooltip
                  title="密度"
                  destroyTooltipOnHide={{ keepParent: false }}
                  getPopupContainer={() => customSizeTooltipContainer.current}
                >
                  <ColumnHeightOutlined style={actionIconStyle} ref={customSizeContainer} />
                  <span ref={customSizeTooltipContainer}></span>
                </Tooltip>
              </Popover>
            ) : null}
            {needSetting && columns && columns.length !== 0 && needSearch ? (
              <Popover
                placement="bottom"
                destroyTooltipOnHide={{ keepParent: false }}
                trigger="click"
                getPopupContainer={() => searchSettingContainer.current}
                content={
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Space>
                      <MyIcon
                        type={'icon-item-prefix'}
                        style={{ fontSize: 12, color: '#595959' }}
                      />
                      <Checkbox
                        defaultChecked={true}
                        onChange={(e) => searchConfigsHandler(e.target.checked)}
                      >
                        全选(查询条件)
                      </Checkbox>
                    </Space>
                    <Divider style={{ margin: '4px 0' }} />
                    <MultipleSelectList configs={configs} setConfigs={setConfigs} />
                  </Space>
                }
              >
                <Tooltip
                  title="设置查询条件"
                  destroyTooltipOnHide={{ keepParent: false }}
                  getPopupContainer={() => searchSettingTooltipContainer.current}
                >
                  <MyIcon type="icon-system" style={actionIconStyle} ref={searchSettingContainer} />
                  <span ref={searchSettingTooltipContainer}></span>
                </Tooltip>
              </Popover>
            ) : null}
            {needFullScreen ? (
              <Tooltip
                placement="top"
                getPopupContainer={() => fullScreenContainer.current}
                destroyTooltipOnHide={{ keepParent: false }}
                title={isFullScreen ? '退出全屏' : '全屏'}
                onClick={() => fullScreenHandler()}
              >
                {!isFullScreen ? (
                  <FullscreenOutlined style={actionIconStyle} ref={fullScreenContainer} />
                ) : (
                  <FullscreenExitOutlined style={actionIconStyle} ref={fullScreenContainer} />
                )}
              </Tooltip>
            ) : null}
          </Space>
        </Row>
        <Table {...props} size={tableSize} />
      </Space>
      <Drawer
        destroyOnClose={true}
        title={drawerTitle}
        visible={drawerVisible}
        width={drawerWidth}
        onClose={() => onClose()}
        getContainer={() => container.current}
        footer={
          drawerFooterVisible ? (
            <Row justify="space-between">
              <span></span>
              <Space>
                <Button onClick={() => onClose()}>取消</Button>
                <Button type="primary" onClick={() => onOk()}>
                  确定
                </Button>
              </Space>
            </Row>
          ) : null
        }
      >
        {drawerChildren}
      </Drawer>
    </div>
  );
};
