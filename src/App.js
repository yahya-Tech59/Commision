import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Agents from "./pages/Agents/Agents";
import Customers from "./pages/Customers/Customer";
import Products from "./pages/Products/Products";
import Orders from "./pages/Orders/Orders";
import Users from "./pages/Users/Users";
import Sidebar from "./SidebarData.js";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
