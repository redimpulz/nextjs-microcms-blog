import queryString from 'query-string';

import http from '@/utils/http/microcms';
import { MicroCmsGetListReqParams, MicroCmsListGetRes } from '@/types/microcms';
import { Blog } from './_blogId';

export type GetRes = MicroCmsListGetRes<Blog>;

export type ReqParams = MicroCmsGetListReqParams;

const get = (reqParams: ReqParams) => {
  const query = queryString.stringify(reqParams);
  return http.get(`blog?${query}`).json<GetRes>();
};

export { get };
