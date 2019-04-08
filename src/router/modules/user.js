import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/user',
  name: 'user',
  meta,
  redirect: { name: 'user-manage' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'manage', name: `${pre}manage`, component: () => import('@/pages/user/manage'), meta: { ...meta, title: '用户管理' } },
    { path: 'smart', name: `${pre}smart`, component: () => import('@/pages/user/smart'), meta: { ...meta, title: '智能托' } },
    { path: 'black', name: `${pre}black`, component: () => import('@/pages/user/black'), meta: { ...meta, title: '黑名单' } }
  ])('user-')
}
