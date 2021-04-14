import React from 'react';
import { GetStaticPropsContext, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import httpStatus from 'http-status-codes';

import * as api from '@/api';
import { Blog } from '@/api/blog/_blogId';

import Layout from '@/components/organisms/Layout';
import Main from '@/components/pages/blog/[blogId]/Main';

export const getStaticPaths = () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps = async ({
  params,
  previewData,
}: GetStaticPropsContext) => {
  const blogId = typeof params?.blogId === 'string' ? params.blogId : '';
  const draftKey: string | undefined = previewData?.draftKey;
  let blog: Blog | undefined = undefined;
  try {
    blog = await api.blogId.get(blogId, {
      draftKey,
    });
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      blog,
    },
    revalidate: 10,
  };
};

export default function Index({
  blog,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter();

  if (isFallback) return null;
  if (!blog) return <Error statusCode={httpStatus.NOT_FOUND} />;

  return (
    <>
      <Layout>
        <Main blog={blog} />
      </Layout>
    </>
  );
}
