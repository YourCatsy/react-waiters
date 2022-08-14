import React from "react";

function Table({ table }) {
  return (
    <div className="single_item">
      <h2>{table.title}</h2>
      <p>{table.desc}</p>
    </div>
  );
}
export default Table;
