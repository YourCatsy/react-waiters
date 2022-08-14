import React, { Component } from "react";
import { DataMenu } from "./dataMenu";
import Products from "./Products";
import Filter from "./filterProducts";
import findMeal from "./FindProduct";
export default class AppProducts extends Component {
  constructor() {
    super();
    this.state = {
      products: localStorage.getItem("dataProduct")
        ? JSON.parse(localStorage.getItem("dataProduct"))
        : DataMenu,
      sort: localStorage.getItem("sortProduct")
        ? JSON.parse(localStorage.getItem("sortProduct"))
        : "",
      cat: "",
      showHideFName: false,
      showHideLName: true
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

    const sortRes = this.state.products.sort((a, b) => {
      if (sorting === "all") {
        return a.id > b.id ? 1 : -1;
      }

      if (sorting === "low") {
        return a.price > b.price ? 1 : -1;
      }

      if (sorting === "high") {
        return a.price < b.price ? 1 : -1;
      }
    });

    this.setState(
      {
        sort: sorting,
        products: sortRes
      },
      () => {
        localStorage.setItem("sortProduct", JSON.stringify(this.state.sort));
        localStorage.setItem("dataProduct", JSON.stringify(this.state.products));
      }
    );
  };

  filteringName = (e) => {
    let categ = e.target.value;

    if (categ === "all") {
      this.setState({ cat: categ, products: DataMenu });
    } else {
      this.setState({
        cat: categ,
        products: DataMenu.filter((product) => {
          return product.category.indexOf(e.target.value) >= 0;
        })
      });
    }
  };

  render() {
    const { showHideFName, showHideLName } = this.state;
    return (
      <div className="wrapper">
        <h1 > Menu</h1>
        <button className='button_menu' onClick={() => this.hideComponent("showHideFName")} > Show Menu</button>
        {showHideFName && showHideLName && (
          <div className="AppTables">
            <Filter
              sorting={this.sorting}
              sorts={this.state.sort}
              filteringName={this.filteringName}
              cat={this.state.cat}
              find={findMeal}
            />
            <Products
              products={this.state.products} />

          </div>
        )}
      </div>
    );
  }
}