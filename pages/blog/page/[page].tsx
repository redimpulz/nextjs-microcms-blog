import React from 'react';
import { GetStaticPropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

import Main from '@/components/pages/blog/Main';
import Layout from '@/components/organisms/Layout';

import * as api from '@/api';
import { Blog } from '@/api/blog/_blogId';

import * as pathUtils from '@/utils/pathUtils';
import { BLOG_NUMBER_PER_PAGE } from '@/constant';

export const getStaticPaths = () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const page = pathUtils.filterQueryValueToInt(params?.page) || 1;
  let totalCount = 0;
  let blogs: Blog[] = [];
  try {
    const data = await api.blog.get({
      limit: BLOG_NUMBER_PER_PAGE,
      offset: BLOG_NUMBER_PER_PAGE * (page - 1),
      orders: '-publishedAt',
    });
    totalCount = data.totalCount;
    blogs = data.contents;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      totalCount,
      blogs,
    },
    revalidate: 10,
  };
};

export default function Index({
  totalCount,
  blogs,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter();
  if (isFallback) return null;
  return (
    <Layout>
      <Main totalCount={totalCount} blogs={blogs} />
    </Layout>
  );
}
