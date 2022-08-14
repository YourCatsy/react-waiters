import React from "react";

export default function FilterTables({ cat, filteringName }) {
  return (
    <div>
      <div className="select_filter">
        <select value={cat} onChange={filteringName}>
          <option value="all">All</option>
          <option value="buffet">buffet</option>
          <option value="banquet">banquet</option>
          <option value="standard">standart</option>
        </select>
      </div>
    </div>
  );
}
