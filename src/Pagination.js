import React from "react";
import "./pagination.css";

function PaginationPage({ dataPerPage, totalData, paginate, currentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <ul className="pagination__list">
        <a onClick={() => paginate(currentPage - 1)} href="!#">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </a>
        {pageNumbers.map((number) => (
          <li key={number} clasName="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
        <a onClick={() => paginate(currentPage + 1)} href="!#">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
      </ul>
    </div>
  );
}

export default PaginationPage;
