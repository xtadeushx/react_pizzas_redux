import React from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import styles from './Pagination.module.scss'

function Pagination({ onChangePage}) {
  const {  status } = useSelector((state) => state.pizza);
  return (
    <ReactPaginate className={styles.root}
    breakLabel="..."
    nextLabel=">"
    onPageChange={event=> onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={3}
    previousLabel="<"
    renderOnZeroPageCount={null}
    disabled={status === 'resolved' || status === 'rejected'}  />
  )
}

export default Pagination