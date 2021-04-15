import ky from 'ky-universal';

const http = ky.create({
  prefixUrl: process.env.MICRO_CMS_API_ENDPOINT,
  hooks: {
    beforeRequest: [
      async (request) => {
        request.headers.set('X-API-KEY', process.env.MICRO_CMS_API_KEY);
      },
    ],
  },
});

export default http;
