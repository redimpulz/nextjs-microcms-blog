import ky from 'ky-universal';

const http = ky.create({
  prefixUrl: process.env.MICRO_CMS_API_ENDPOINT,
  hooks: {
    beforeRequest: [
      async (request) => {
        try {
          request.headers.set('X-API-KEY', process.env.MICRO_CMS_API_KEY);
        } catch (error) {
          console.log(error);
        }
      },
    ],
  },
});

export default http;
