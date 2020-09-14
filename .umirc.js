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
            },
            {
              path: '/dashboard/analysis',
              component: '@/pages/analysis/index',
            },
            {
              path: '/system/organization',
              component: '@/pages/organization/index',
            },
            {
              path: '/system/project',
              component: '@/pages/project/index',
            },
            {
              path: '/system/application',
              component: '@/pages/application/index',
            },
            {
              path: '/system/server',
              component: '@/pages/server/index',
            },
            {
              path: '/system/setting',
              component: '@/pages/setting/index',
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
