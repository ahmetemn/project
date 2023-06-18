import React from 'react'
import { Pagination } from 'react-bootstrap';
export default function BranchPagination({postPerPage,totalPost , paginate,currentPage}) {

const pageNumbers=[];

for(let i = 1 ; i <= Math.ceil(totalPost/postPerPage) ; i++)
{
        pageNumbers.push(i);
}

  return (
    <Pagination>
    <Pagination.First onClick={() => paginate(1)} />
    <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
  
    {currentPage > 4 && (
      <>
        <Pagination.Item onClick={() => paginate(1)}>{1}</Pagination.Item>
        <Pagination.Ellipsis disabled />
      </>
    )}
  
    {pageNumbers.map((number) => {
      if (number === currentPage) {
        return (
          <Pagination.Item key={number} active onClick={() => paginate(number)}>
            {number}
          </Pagination.Item>
        );
      } else if (number >= currentPage - 2 && number <= currentPage + 2) {
        return (
          <Pagination.Item key={number} onClick={() => paginate(number)}>
            {number}
          </Pagination.Item>
        );
      }
      return null;
    })}
  
    {currentPage < pageNumbers.length - 3 && (
      <>
        <Pagination.Ellipsis disabled />
        <Pagination.Item onClick={() => paginate(pageNumbers.length)}>
          {pageNumbers.length}
        </Pagination.Item>
      </>
    )}
  
    <Pagination.Next onClick={() => paginate(currentPage + 1)} />
    <Pagination.Last onClick={() => paginate(pageNumbers.length)} />
  </Pagination>
  )
};