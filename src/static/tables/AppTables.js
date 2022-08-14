import React, { Component } from "react";
import { DataTables } from "./dataTables";
import Tables from "./Tables";
import FilterTables from "./filterTables";

export default class AppTables extends Component {
  constructor() {
    super();
    this.state = {
      tables: localStorage.getItem("dataTable")
        ? JSON.parse(localStorage.getItem("dataTable"))
        : DataTables,
      sort: localStorage.getItem("sortTable")
        ? JSON.parse(localStorage.getItem("sortTable"))
        : "",
      cat: "",
      showHideFName: true,
      showHideLName: false
    }
    this.hideComponent = this.hideComponent.bind(this);
  }
  
  hideComponent(name) {
    switch (name) {
      case "showHideFName":
        this.setState({ showHideFName: !this.state.showHideFName });
        break;
      case "showHideLName":
        this.setState({ showHideLName: !this.state.showHideLName });
        break;
      default:
        null;
    }
  }

  sorting = (e) => {
    const sorting = e.target.value;
    const sortRes = this.state.tables.setState(
      {
        sort: sorting,
        tables: sortRes
      },
      () => {
        localStorage.setItem("sortTable", JSON.stringify(this.state.sort));
        localStorage.setItem("dataTable", JSON.stringify(this.state.tables));
      }
    );
  };

  filteringName = (e) => {
    let categ = e.target.value;

    if (categ === "all") {
      this.setState({ cat: categ, tables: DataTables });
    } else {
      this.setState({
        cat: categ,
        tables: DataTables.filter((table) => {
          return table.category.indexOf(e.target.value) >= 0;
        })
      });
    }
  };

  render() {
    const { showHideFName, showHideLName } = this.state;
    return (
      <div className="wrapper">
        <h1>Tables</h1>
        <button className='button_menu' onClick={() => this.hideComponent("showHideLName")}><p> Show Tables</p></button>
        {showHideLName && showHideFName && (
          <div className="AppTables">
            <FilterTables
              sorting={this.sorting}
              sorts={this.state.sort}
              filteringName={this.filteringName}
              cat={this.state.cat}
            />
            <Tables tables={this.state.tables} />
          </div>
        )}
      </div>
    );
  }
}