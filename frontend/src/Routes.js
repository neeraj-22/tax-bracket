import React from "react";
import { BrowserRouter, Routes as RoutesAlt, Route } from "react-router-dom";
import AddUser from "./components/AddUser/AddUser.js"

//Importing Components
import Homepage from "./components/Homepage/Homepage";
import TestComponent from "./components/TestComponent.js";
import UserTax from "./components/UserTax/UserTax.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesAlt>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='/user/create' exact element={<AddUser/>} />
        <Route path='/user/:id/tax' exact element={<UserTax/>} />

        <Route path='/test/users' exact element={<TestComponent/>} />
      </RoutesAlt>
    </BrowserRouter>
  );
};

export default Routes;
