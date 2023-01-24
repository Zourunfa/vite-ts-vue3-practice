export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        msg: 'succuess',
        data: {
          name: 'vben',
        },
      };
    },
  },
];
