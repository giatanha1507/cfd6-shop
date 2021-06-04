import React from "react";
import { NavLink } from "react-router-dom";
import useTranslate from "../../core/hook/useTranslate";

export function Paging({ itemPerPage, totalItem, paginate, currentPage }) {
  const pageNumber = [];
  const totalPages = Math.ceil(totalItem / itemPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }

  return (
    <nav className="d-flex justify-content-center justify-content-md-end mt-10">
      <ul className="pagination pagination-sm text-gray-400">
        <li className="page-item">
          <a
            // onClick={() => paginate(totalPages - (totalPages - 1))}
            className="page-link page-link-arrow"
          >
            <i className="fa fa-step-backward" />
          </a>
        </li>
        <li className="page-item">
          <a
            // onClick={() => paginate(currentPage - 1)}
            className="page-link page-link-arrow"
          >
            <i className="fa fa-caret-left" />
          </a>
        </li>
        {pageNumber.map((number) => (
          <li
            key={number}
            className={number === currentPage && "page-item active"}
          >
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a
            // onClick={() => paginate(currentPage + 1)}
            className="page-link page-link-arrow"
          >
            <i className="fa fa-caret-right" />
          </a>
        </li>
        <li className="page-item">
          <a
            // onClick={() => paginate(totalPages)}
            className="page-link page-link-arrow"
          >
            <i className="fa fa-step-forward" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
