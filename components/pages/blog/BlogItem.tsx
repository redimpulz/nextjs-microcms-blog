import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { parseISO } from 'date-fns';

import { Blog } from '@/api/blog/_blogId';
import * as dateUtils from '@/utils/dateUtils';

type Props = {
  blog: Blog;
};

const BlogItem: React.FC<Props> = ({
  blog: { id, title, image, publishedAt },
}) => {
  const subTitle = dateUtils.formatYMD(parseISO(publishedAt));
  return (
    <Link href={`/blog/${id}`}>
      <div>
        {!!image && <Image src={image.url} width={100} height={100} />}
        <div>
          <p>{subTitle}</p>
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
