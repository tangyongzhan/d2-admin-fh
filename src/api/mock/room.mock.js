import Mock, { Random } from 'mockjs'

var room = Mock.mock({
  'list|3-10': [
    {
      'id|+1': 1,
      'name|+1': [
        'Hello',
        'Mock.js',
        '!'
      ],
      'src': '/image/placeholder.png',
      'status|1-2': true
    }
  ],
  'allAvatar|10-20': [
    {
      'id|+1': 1,
      'avatar|+1': [
        '/image/temp/2.png',
        '/image/temp/3.png'
      ]
    }
  ],
  'allCard|10-20': [
    {
      'id|+1': 1,
      'date': Random.date('yyyy-MM-dd'),
      'nickname|+1': [
        '网校虎',
        '李孝贵',
        '二麻子'
      ],
      'comment': Random.sentence(3, 5),
      'type|+1': [
        '转入',
        '转出'
      ],
      'number|1-100': 100
    }
  ]
})

export default{
  room
}
