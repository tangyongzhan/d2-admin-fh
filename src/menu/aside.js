// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '房间管理',
    icon: 'cube',
    children: [
      { icon: 'angle-right', path: '/room/hall', title: '游戏大厅' },
      { icon: 'angle-right', path: '/room/setting', title: '房间设置' },
      { icon: 'angle-right', path: '/room/card', title: '房卡转让' },
      { icon: 'angle-right', path: '/room/password', title: '密码修改' },
      { icon: 'angle-right', path: '/room/cost', title: '房间续费' }
    ]
  },
  {
    title: '现场监控',
    icon: 'life-ring',
    children: [
      { icon: 'angle-right', path: '/scene/monitor', title: '现场监控' },
      { icon: 'angle-right', path: '/scene/quiz', title: '竞猜核对' }
    ]
  },
  {
    title: '上下分',
    icon: 'line-chart',
    children: [
      { icon: 'angle-right', path: '/score/updown', title: '上下分' },
      { icon: 'angle-right', path: '/score/apply', title: '用户入房申请' }
    ]
  },
  {
    title: '用户管理',
    icon: 'user-circle-o',
    children: [
      { icon: 'angle-right', path: '/user/manage', title: '用户管理' },
      { icon: 'angle-right', path: '/user/smart', title: '智能托' },
      { icon: 'angle-right', path: '/user/black', title: '黑名单' }
    ]
  },
  {
    title: '游戏设置',
    icon: 'gamepad',
    children: [
      { icon: 'angle-right', path: '/game/odds', title: '赔率限额' },
      { icon: 'angle-right', path: '/game/rewater', title: '回水比例' },
      { icon: 'angle-right', path: '/game/message', title: '消息设置' },
      { icon: 'angle-right', path: '/game/setting', title: '通用设置' }
    ]
  },
  {
    title: '报表查询',
    icon: 'list-alt',
    children: [
      { icon: 'angle-right', path: '/report/total', title: '总报表' },
      { icon: 'angle-right', path: '/report/rewater', title: '返水报表' },
      { icon: 'angle-right', path: '/report/proxy', title: '代理报表' },
      { icon: 'angle-right', path: '/report/upon', title: '上盘报表' },
      { icon: 'angle-right', path: '/report/bet', title: '注单报表' }
    ]
  },
  {
    title: '上盘助手',
    icon: 'yelp',
    children: [
      { icon: 'angle-right', path: '/helper/plate1', title: '盘口1' },
      { icon: 'angle-right', path: '/helper/plate2', title: '盘口2' },
      { icon: 'angle-right', path: '/helper/scale', title: '上盘比例' }
    ]
  },
  {
    title: '日志',
    icon: 'calendar-minus-o',
    children: [
      { icon: 'angle-right', path: '/log/record', title: '积分记录' }
    ]
  },
  {
    title: '历史开奖',
    icon: 'trophy',
    children: [
      { icon: 'angle-right', path: '/lottery/bjsc', title: '北京赛车' },
      { icon: 'angle-right', path: '/lottery/xyft', title: '幸运飞艇' },
      { icon: 'angle-right', path: '/lottery/xyf1', title: '幸运F1' },
      { icon: 'angle-right', path: '/lottery/cqssc', title: '重庆时时彩' },
      { icon: 'angle-right', path: '/lottery/pcdd', title: 'PC蛋蛋' },
      { icon: 'angle-right', path: '/lottery/bjl', title: '百家乐' }
    ]
  }
]
