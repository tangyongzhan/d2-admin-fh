import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/report',
  name: 'report',
  meta,
  redirect: { name: 'report-total' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'total', name: `${pre}total`, component: () => import('@/pages/report/total'), meta: { ...meta, title: '总报表' } },
    { path: 'rewater', name: `${pre}rewater`, component: () => import('@/pages/report/rewater'), meta: { ...meta, title: '返水报表' } },
    { path: 'proxy', name: `${pre}proxy`, component: () => import('@/pages/report/proxy'), meta: { ...meta, title: '代理报表' } },
    { path: 'upon', name: `${pre}upon`, component: () => import('@/pages/report/upon'), meta: { ...meta, title: '上盘报表' } },
    { path: 'bet', name: `${pre}bet`, component: () => import('@/pages/report/bet'), meta: { ...meta, title: '注单报表' } }
  ])('report-')
}
