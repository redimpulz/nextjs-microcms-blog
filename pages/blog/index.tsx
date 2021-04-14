import { GetServerSidePropsContext } from 'next';
import httpStatus from 'http-status-codes';

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  res.statusCode = httpStatus.MOVED_PERMANENTLY;
  res.setHeader('Location', '/blog/page/1');
  return {
    props: {},
  };
};

export default function Index() {
  return null;
}
