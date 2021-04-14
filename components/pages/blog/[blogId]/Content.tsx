import Image from 'next/image';
import React from 'react';
import { parseISO } from 'date-fns';

import * as dateUtils from '@/utils/dateUtils';
import { Blog } from '@/api/blog/_blogId';

type Props = {
  blog: Blog;
};

const Content: React.FC<Props> = ({
  blog: { title, content, image, publishedAt },
}) => (
  <>
    <div>
      {!!image && <Image src={image.url} width={100} height={100} />}
      <p>{dateUtils.formatYMD(parseISO(publishedAt))}</p>
      <p>{title}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </>
);

export default Content;
