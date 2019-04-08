import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/log',
  name: 'log',
  meta,
  redirect: { name: 'log-record' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'record', name: `${pre}record`, component: () => import('@/pages/log/record'), meta: { ...meta, title: '积分记录' } }
  ])('log-')
}
