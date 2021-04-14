export type MicroCmsItemGetRes<T> = T & {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type MicroCmsListGetRes<T> = {
  contents: MicroCmsItemGetRes<T>[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type MicroCmsGetListReqParams = {
  limit?: number;
  offset?: number;
  orders?: '-publishedAt' | 'publishedAt'; // 降順：-publishedAt 昇順：publishedA
  filters?: string;
};

export type MicroCmsImageItem = {
  url: string;
  height: string;
  width: string;
};
