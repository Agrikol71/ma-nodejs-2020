module.exports = [
    {
      expected: {
        statusCode: 200,
        responseBody: [{key: 'messeage', value: 'RANDOM'}],
      },
      option: {
        host: 'localhost',
        port: 3000,
        path: '/random',
        method: 'GET',
        headers: {
          authorization: 'Basic QW5kcmlpOjEyMzMyMQ==',
        },
      },
    },
    {
      expected: {
        statusCode: 401,
        responseBody: [{key: 'messeage', value: 'Unauthorized'}],
      },
      option: {
        host: 'localhost',
        port: 3000,
        path: '/metrics',
        method: 'GET',
      },
    },
]