import React from 'react';

import { Blog } from '@/api/blog/_blogId';
import Content from './Content';

type Props = {
  blog: Blog;
};

const Main: React.FC<Props> = ({ blog }) => {
  return (
    <>
      <Content blog={blog} />
    </>
  );
};

export default Main;
