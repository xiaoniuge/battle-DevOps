import { useState } from 'react';
import { Layout, PageHeader, Space, Avatar, Dropdown, Menu, Card } from 'antd';
import { Link } from 'react-router-dom';
import MyIcon from '@/component/MyIcon';
import BattleMenu from './BattleMenu';
import styles from './index.scss';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Sider, Header, Content } = Layout;

const userMenu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

export default (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [currentMenuTitle, setCurrentMenuTitle] = useState();
  const [breadcrumbs, setBreadcrumbs] = useState();
  const [currentSelectedKey, setCurrentSelectedKey] = useState();

  const menuSelectedHandler = (route) => {
    setCurrentSelectedKey(route.path);
    setCurrentMenuTitle(route.breadcrumbName);
  };
  return (
    <Layout style={{ minHeight: window.innerHeight }}>
      <Sider collapsed={collapsed} width={256}>
        <div className={styles.logo}>
          <span>logo</span>
        </div>
        <BattleMenu
          setCurrentMenuTitle={setCurrentMenuTitle}
          setBreadcrumbs={setBreadcrumbs}
          currentSelectedKey={currentSelectedKey}
          collapsed={collapsed}
          setCurrentSelectedKey={setCurrentSelectedKey}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: '#ffffff',
            paddingLeft: 16,
            paddingRight: 16,
            boxShadow: '10px 10px 5px #e6f7ff',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {collapsed ? (
            <MenuUnfoldOutlined
              className={styles.header_menu_fold}
              onClick={() => setCollapsed(false)}
            />
          ) : (
            <MenuFoldOutlined
              className={styles.header_menu_fold}
              onClick={() => setCollapsed(true)}
            />
          )}
          <Space>
            <Dropdown overlay={userMenu}>
              <Space style={{ cursor: 'pointer' }}>
                <Avatar size={40}>USER</Avatar>
                <span style={{ fontWeight: 'bolder' }}>battle</span>
              </Space>
            </Dropdown>
          </Space>
        </Header>
        <Content style={{ marginTop: 8 }}>
          <PageHeader
            className={styles.page_header}
            title={currentMenuTitle}
            breadcrumb={{
              routes: breadcrumbs
                ? breadcrumbs[window.location.pathname.replace('/', '')]
                  ? [{ path: '/home', breadcrumbName: '首页', icon: 'icon-home' }].concat(
                      breadcrumbs[window.location.pathname.replace('/', '')],
                    )
                  : [{ path: '/home', breadcrumbName: '首页', icon: 'icon-home' }]
                : [{ path: '/home', breadcrumbName: '首页', icon: 'icon-home' }],
              itemRender: (route, params, routes, paths) => {
                const last = routes.indexOf(route) === routes.length - 1;
                return last ? (
                  <Space>
                    <MyIcon type={route.icon} />
                    {route.breadcrumbName}
                  </Space>
                ) : (
                  <Link to={route.path} onClick={() => menuSelectedHandler(route)}>
                    <Space>
                      <MyIcon type={route.icon} />
                      {route.breadcrumbName}
                    </Space>
                  </Link>
                );
              },
            }}
          />
          <div style={{ padding: 16 }}>
            {props.location.pathname.indexOf('/dashboard') !== -1 ||
            props.location.pathname === '/home' ? (
              props.children
            ) : (
              <Card
                className={styles.layoutContent}
                bodyStyle={{ minHeight: window.innerHeight - 220 }}
              >
                {props.children}
              </Card>
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
