
import React from 'react';
import Pagination from '@mui/material/Pagination';
import "./pagination.css";

export default function PaginationControlled({page,handlePageChange}) {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div spacing={2} className='pagination_component'>
      <Pagination
  count={10}
  page={page}
  onChange={(e,value) => handlePageChange(e,value)}
  onClick={topFunction()}
  sx={{
    color: "var(--white)",
    "& .Mui-selected": {
      backgroundColor: "var(--blue) !important",
      color: "#fff !important",
      borderColor: "var(--blue) !important",
    },
    "& .MuiPaginationItem-ellipsis": {
      border: "1px solid var(--grey) !important", // Note the correction here
    },
    "& .MuiPaginationItem-text": {
      color: "var(--white)",
      border: "1px solid var(--grey)",
    },
  }}
/>

    </div>
  );
}