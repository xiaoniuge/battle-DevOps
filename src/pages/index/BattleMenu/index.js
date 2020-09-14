import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { MyIcon } from '@/component';

const { SubMenu } = Menu;

export default ({
  setCurrentMenuTitle,
  setBreadcrumbs,
  currentSelectedKey,
  setCurrentSelectedKey,
  collapsed,
}) => {
  const [data, setData] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);
  const renderMenu = (item) => {
    if (item.chidren) {
      return renderSubMenu(item);
    } else {
      return renderMenuItem(item);
    }
  };
  const renderSubMenu = (item) => {
    return (
      <SubMenu
        key={item.path}
        title={item.name}
        icon={<MyIcon type={item.icon} style={{ color: 'white' }} />}
      >
        {item.chidren.map((subItem) => {
          if (subItem.chidren) {
            return renderSubMenu(subItem);
          } else {
            return renderMenuItem(subItem);
          }
        })}
      </SubMenu>
    );
  };
  const renderMenuItem = (item) => {
    return (
      <Menu.Item
        key={item.path}
        title={item.name}
        icon={<MyIcon type={item.icon} style={{ color: 'white' }} />}
      >
        <Link to={item.path}>{item.name}</Link>
      </Menu.Item>
    );
  };
  const menuSelectHandler = (item, key) => {
    setCurrentSelectedKey(key);
    setCurrentMenuTitle(item.props.title);
  };

  const getCurrentMenuTitle = (routes, path) => {
    let menuTitle = '';
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].chidren && menuTitle === '') {
        menuTitle = getCurrentMenuTitle(routes[i].chidren, path);
      } else {
        if (path === routes[i].path) {
          menuTitle = routes[i].name;
          return menuTitle;
        }
      }
    }
    return menuTitle;
  };

  const breadcrumbs = (arr) => {
    let tmp = {};
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].chidren) {
        tmp = { ...tmp, ...breadcrumbs(arr[i].chidren) };
      } else {
        if (arr[i].path.replace('/', '') !== 'home')
          tmp[arr[i].path.replace('/', '')] = [
            { path: arr[i].path, breadcrumbName: arr[i].name, icon: arr[i].icon },
          ];
      }
    }
    return tmp;
  };

  const openKeysHandler = (data) => {
    let openKeys = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].chidren) {
        openKeys.push(data[i].path);
        openKeys = [...openKeys, ...openKeysHandler(data[i].chidren)];
      } else {
        if (data[i].path === window.location.pathname) return openKeys;
      }
    }
    return openKeys;
  };

  useEffect(() => {
    setCurrentSelectedKey(window.location.pathname);
    setData(menuData);
  }, []);

  useEffect(() => {
    setBreadcrumbs(breadcrumbs(data));
    setCurrentMenuTitle(getCurrentMenuTitle(menuData, window.location.pathname));
  }, [data]);

  useEffect(() => {
    if (!collapsed) setOpenKeys(openKeysHandler(data));
    else setOpenKeys([]);
  }, [data, collapsed]);

  return (
    <>
      <Menu
        theme="dark"
        mode="inline"
        openKeys={openKeys}
        defaultOpenKeys={openKeys}
        defaultSelectedKeys={[data[0]?.path]}
        selectedKeys={[currentSelectedKey]}
        onSelect={({ item, key }) => menuSelectHandler(item, key)}
        onOpenChange={(openKeys) => setOpenKeys(openKeys)}
      >
        {data.map((item) => renderMenu(item))}
      </Menu>
    </>
  );
};

const menuData = [
  {
    path: '/home',
    name: '首页',
    icon: 'icon-home',
    chidren: null,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'icon-dashboard',
    chidren: [
      {
        path: '/dashboard/analysis',
        name: '分析页',
        icon: 'icon-analysis',
        chidren: null,
      },
    ],
  },
  {
    path: '/system',
    name: '控制台',
    icon: 'icon-control',
    chidren: [
      {
        path: '/system/organization',
        name: '组织信息',
        icon: 'icon-organization',
        chidren: null,
      },
      {
        path: '/system/project',
        name: '项目管理',
        icon: 'icon-project',
        chidren: null,
      },
      {
        path: '/system/application',
        name: '应用管理',
        icon: 'icon-Application',
        chidren: null,
      },
      {
        path: '/system/server',
        name: '服务器管理',
        icon: 'icon-server',
        chidren: null,
      },
    ],
  },
];
