import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/helper',
  name: 'helper',
  meta,
  redirect: { name: 'helper-plate1' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'plate1', name: `${pre}plate1`, component: () => import('@/pages/helper/plate1'), meta: { ...meta, title: '盘口1' } },
    { path: 'plate2', name: `${pre}plate2`, component: () => import('@/pages/helper/plate2'), meta: { ...meta, title: '盘口2' } },
    { path: 'scale', name: `${pre}scale`, component: () => import('@/pages/helper/scale'), meta: { ...meta, title: '上盘比例' } }
  ])('helper-')
}
