import queryString from 'query-string';

import http from '@/utils/http/microcms';
import { MicroCmsGetListReqParams, MicroCmsListGetRes } from '@/types/microcms';

import { MicroCmsItemGetRes } from '@/types/microcms';

export type CategorySchema = {
  name: string;
};

export type Category = MicroCmsItemGetRes<CategorySchema>;

export type GetRes = MicroCmsListGetRes<Category>;

export type ReqParams = MicroCmsGetListReqParams;

const get = (reqParams: ReqParams) => {
  const query = queryString.stringify(reqParams);
  return http.get(`category?${query}`).json<GetRes>();
};

export { get };
