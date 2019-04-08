import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/game',
  name: 'game',
  meta,
  redirect: { name: 'game-odds' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'odds', name: `${pre}odds`, component: () => import('@/pages/game/odds'), meta: { ...meta, title: '赔率设置' } },
    { path: 'rewater', name: `${pre}rewater`, component: () => import('@/pages/game/rewater'), meta: { ...meta, title: '返水比例' } },
    { path: 'message', name: `${pre}message`, component: () => import('@/pages/game/message'), meta: { ...meta, title: '消息设置' } },
    { path: 'setting', name: `${pre}setting`, component: () => import('@/pages/game/setting'), meta: { ...meta, title: '通用设置' } }
  ])('game-')
}
