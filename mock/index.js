import mockJs from 'mockjs';

const listData = mockJs.mock({
  'list|100': [
    {
      'id|+1': 1,
      name: '@name',
      email: '@email',
      birth: '@time',
      content: '@cparagraph(5,15)',
      img_url: '@image("100x100","#FFE4B5","#fff","暂无图片")',
      add_time: '@date(yyyy-MM-dd hh:mm:s)',
    },
  ],
});

export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        msg: 'succuess',
        data: listData,
      };
    },
  },
];
