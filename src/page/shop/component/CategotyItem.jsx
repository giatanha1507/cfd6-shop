import React from "react";

export function CategotyItem({ title }) {
  return (
    <li className="list-styled-item">
      <a className="list-styled-link" href="#">
        {title}
      </a>
    </li>
  );
}
