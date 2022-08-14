import React from "react";

export default function Table({ table }) {
  return (
    <div className="single_item">
      <h2>{table.title}</h2>
      <p>{table.desc}</p>
    </div>
  );
}