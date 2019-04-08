// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '房间管理',
    icon: 'folder-o',
    children: [
      { path: '/room/hall', title: '游戏大厅' },
      { path: '/room/setting', title: '房间设置' },
      { path: '/room/card', title: '房卡转让' },
      { path: '/room/password', title: '密码修改' },
      { path: '/room/cost', title: '房间续费' }
    ]
  },
  {
    title: '现场监控',
    icon: 'folder-o',
    children: [
      { path: '/scene/monitor', title: '现场监控' },
      { path: '/scene/quiz', title: '竞猜核对' }
    ]
  },
  {
    title: '上下分',
    icon: 'folder-o',
    children: [
      { path: '/score/updown', title: '上下分' },
      { path: '/score/apply', title: '用户入房申请' }
    ]
  },
  {
    title: '用户管理',
    icon: 'folder-o',
    children: [
      { path: '/user/manage', title: '用户管理' },
      { path: '/user/smart', title: '智能托' },
      { path: '/user/black', title: '黑名单' }
    ]
  },
  {
    title: '游戏设置',
    icon: 'folder-o',
    children: [
      { path: '/game/odds', title: '赔率限额' },
      { path: '/game/rewater', title: '回水比例' },
      { path: '/game/message', title: '消息设置' },
      { path: '/game/setting', title: '通用设置' }
    ]
  },
  {
    title: '报表查询',
    icon: 'folder-o',
    children: [
      { path: '/report/total', title: '总报表' },
      { path: '/report/rewater', title: '返水报表' },
      { path: '/report/proxy', title: '代理报表' },
      { path: '/report/upon', title: '上盘报表' },
      { path: '/report/bet', title: '注单报表' }
    ]
  },
  {
    title: '上盘助手',
    icon: 'folder-o',
    children: [
      { path: '/helper/plate1', title: '盘口1' },
      { path: '/helper/plate2', title: '盘口2' },
      { path: '/helper/scale', title: '上盘比例' }
    ]
  },
  {
    title: '日志',
    icon: 'folder-o',
    children: [
      { path: '/log/record', title: '积分记录' }
    ]
  },
  {
    title: '历史开奖',
    icon: 'folder-o',
    children: [
      { path: '/lottery/bjsc', title: '北京赛车' },
      { path: '/lottery/xyft', title: '幸运飞艇' },
      { path: '/lottery/xyf1', title: '幸运F1' },
      { path: '/lottery/cqssc', title: '重庆时时彩' },
      { path: '/lottery/pcdd', title: 'PC蛋蛋' },
      { path: '/lottery/bjl', title: '百家乐' }
    ]
  }
]
