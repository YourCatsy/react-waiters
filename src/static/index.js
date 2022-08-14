import findMeal from "./menu/FindProduct";
import AppTables from "./tables/AppTables";
import AppProducts from "./menu/AppProducts";
import React from "react";
import AppModal from './price/ModalWindow'
import AppWaiters from "./waiters/AppWaiters";
import ToggleVisibility from "./waiters/ShowhideButton";


export default function App() {

  return (
    <div className='container'>
      <ToggleVisibility>
        <AppWaiters />
      </ToggleVisibility>
      <AppTables />
      <AppProducts />
      <AppModal
        find={findMeal} />
    </div>
  );
}


