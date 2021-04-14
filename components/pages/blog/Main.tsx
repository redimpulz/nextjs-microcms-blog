import React from 'react';
import { useRouter } from 'next/router';

import BlogItem from './BlogItem';

import Paginate from '@/components/organisms/Paginate';

import { Blog } from '@/api/blog/_blogId';

import * as pathUtils from '@/utils/pathUtils';
import { BLOG_NUMBER_PER_PAGE } from '@/constant';

type Props = {
  totalCount: number;
  blogs: Blog[];
};

const Main: React.FC<Props> = ({ totalCount, blogs }) => {
  // router
  const { push, pathname, query } = useRouter();
  const page = pathUtils.filterQueryValueToInt(query.page) || 1;

  const handlePageChange = (selectedItem: { selected: number }) =>
    push({
      pathname,
      query: { ...query, page: selectedItem.selected + 1 },
    });

  return (
    <div>
      <div>
        {blogs.map((x) => (
          <BlogItem key={x.id} blog={x} />
        ))}
      </div>
      <Paginate
        forcePage={page - 1}
        pageCount={Math.ceil(totalCount / BLOG_NUMBER_PER_PAGE)}
        pageRangeDisplayed={10}
        marginPagesDisplayed={5}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Main;
