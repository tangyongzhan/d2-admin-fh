import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/room',
  name: 'room',
  meta,
  redirect: { name: 'room-hall' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'hall', name: `${pre}hall`, component: () => import('@/pages/room/hall'), meta: { ...meta, title: '游戏大厅' } },
    { path: 'setting', name: `${pre}setting`, component: () => import('@/pages/room/setting'), meta: { ...meta, title: '房间设置' } },
    { path: 'card', name: `${pre}card`, component: () => import('@/pages/room/card'), meta: { ...meta, title: '房卡转让' } },
    { path: 'password', name: `${pre}password`, component: () => import('@/pages/room/password'), meta: { ...meta, title: '密码设置' } },
    { path: 'cost', name: `${pre}cost`, component: () => import('@/pages/room/cost'), meta: { ...meta, title: '房间续费' } }
  ])('room-')
}
