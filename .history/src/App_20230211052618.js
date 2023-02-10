import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Orders from './containers/Orders';
import Customers from './containers/Customers';
import Employees from './containers/Employees';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="Employees" element={<Employees />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
