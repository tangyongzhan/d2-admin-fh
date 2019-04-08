import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/lottery',
  name: 'lottery',
  meta,
  redirect: { name: 'lottery-bjsc' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'bjsc', name: `${pre}bjsc`, component: () => import('@/pages/lottery/bjsc'), meta: { ...meta, title: '北京赛车' } },
    { path: 'xyft', name: `${pre}xyft`, component: () => import('@/pages/lottery/xyft'), meta: { ...meta, title: '幸运飞艇' } },
    { path: 'xyf1', name: `${pre}xyf1`, component: () => import('@/pages/lottery/xyf1'), meta: { ...meta, title: '幸运F1' } },
    { path: 'cqssc', name: `${pre}cqssc`, component: () => import('@/pages/lottery/cqssc'), meta: { ...meta, title: '重庆时时彩' } },
    { path: 'pcdd', name: `${pre}pcdd`, component: () => import('@/pages/lottery/pcdd'), meta: { ...meta, title: 'PC蛋蛋' } },
    { path: 'bjl', name: `${pre}bjl`, component: () => import('@/pages/lottery/bjl'), meta: { ...meta, title: '百家乐' } }
  ])('lottery-')
}
