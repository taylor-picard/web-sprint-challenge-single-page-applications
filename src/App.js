import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/homepage";
import Form from "./Pages/form";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<Form />}/>
        {/* <Route path="confirmation" element={<Confirm />}/> */}
      </Routes>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/pizza' id="order-pizza">Order Pizza</Link>
      </nav>
    </div>
  );
};
export default App;
