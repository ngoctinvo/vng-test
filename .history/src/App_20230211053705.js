import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Orders from "./containers/Orders";
import Customers from "./containers/Customers";
import Employees from "./containers/Employees";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="Employees" element={<Employees />} />
          <Route path="404" element={<NotFound />} />
          <Redirect to="/404" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
