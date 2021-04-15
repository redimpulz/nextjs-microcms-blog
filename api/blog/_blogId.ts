import queryString from 'query-string';

import http from '@/utils/http/microcms';
import { MicroCmsItemGetRes, MicroCmsImageItem } from '@/types/microcms';

export type BlogSchema = {
  title: string;
  image: MicroCmsImageItem | null;
  content: string;
};

export type Blog = MicroCmsItemGetRes<BlogSchema>;

export type GetRes = Blog;

export type ReqParams = {
  fields?: string;
};

const get = (blogId: string, reqParams: ReqParams) => {
  const query = queryString.stringify(reqParams);
  return http.get(`blog/${blogId}?${query}`).json<GetRes>();
};

export { get };
