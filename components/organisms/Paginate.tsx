import React from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

type Props = {} & ReactPaginateProps;

const Paginate: React.FC<Props> = (props) => (
  <>
    <ReactPaginate
      containerClassName="pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      previousLabel="<"
      nextLabel=">"
      previousClassName="page-item"
      nextClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      disabledClassName="disabled"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      {...props}
    />
  </>
);

export default Paginate;
