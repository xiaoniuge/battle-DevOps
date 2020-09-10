// ref: https://umijs.org/config/
export default {
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      component: '@/pages/index', // 登录页
      title: '登录',
    },
    {
      path: '/',
      component: '@/layouts/main',
      routes: [
        {
          path: '/',
          component: '@/pages/index/index',
          routes: [
            {
              path: '/home',
              component: '@/pages/home/index',
              title: '首页',
            },
            {
              path: '/organization',
              component: '@/pages/organization/index',
              title: '组织管理',
            },
            {
              path: '/project',
              component: '@/pages/project/index',
              title: '项目管理',
            },
            {
              path: '/setting',
              component: '@/pages/setting/index',
              title: '设置',
            },
          ],
        },
      ],
    },
  ],
  request: {
    dataField: 'result',
  },
};
