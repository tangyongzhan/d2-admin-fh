import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/scene',
  name: 'scene',
  meta,
  redirect: { name: 'scene-monitor' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'monitor', name: `${pre}monitor`, component: () => import('@/pages/scene/monitor'), meta: { ...meta, title: '现场监控' } },
    { path: 'quiz', name: `${pre}quiz`, component: () => import('@/pages/scene/quiz'), meta: { ...meta, title: '竞猜核对' } }
  ])('scene-')
}
