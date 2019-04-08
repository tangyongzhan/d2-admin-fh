import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/score',
  name: 'score',
  meta,
  redirect: { name: 'score-updown' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'updown', name: `${pre}updown`, component: () => import('@/pages/score/updown'), meta: { ...meta, title: '上下分' } },
    { path: 'apply', name: `${pre}apply`, component: () => import('@/pages/score/apply'), meta: { ...meta, title: '用户入房申请' } }
  ])('score-')
}
