import React from "react";
import Table from "./Table";

export default function Tables(props) {
  return (
    <div className="products">
      {props.tables.map((table) => (
        <Table key={table.id} table={table} />
      ))}
    </div>
  );
}
