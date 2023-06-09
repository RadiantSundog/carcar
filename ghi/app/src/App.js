import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalespersonForm from './SalespersonForm';
import SalespeopleList from './SalespeopleList';
import SalespeopleHistoryList from './SalespeopleHistoryList';
import CustomerForm from './CustomerForm';
import CustomersList from './CustomersList';
import SaleForm from './SaleForm';
import SalesList from './SalesList';
import AutomobilesList from './AutomobilesList';
import ManufacturersList from './ManufacturersList';
import VehicleModelsList from './VehicleModelsList';
import ManufacturerForm from './ManufacturerForm';
import VehicleModelForm from './VehicleModelForm';
import AutomobileForm from './AutomobileForm';
import TechnicianForm from './TechnicianForm';
import TechnicianList from './TechnicianList';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import ServiceHistoryList from './ServiceHistory';


function App() {

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="salespeople/history" element={<SalespeopleHistoryList />} />
          <Route path="salespeople/new" element={<SalespersonForm />} />
          <Route path="salespeople/" element={<SalespeopleList />} />
          <Route path="customers/new" element={<CustomerForm />} />
          <Route path="customers/" element={<CustomersList />} />
          <Route path="sales/new" element={<SaleForm />} />
          <Route path="sales/" element={<SalesList />} />
          <Route path="automobiles/new" element={<AutomobileForm />} />
          <Route path="automobiles/" element={<AutomobilesList />} />
          <Route path="manufacturers/new" element={<ManufacturerForm />} />
          <Route path="manufacturers/" element={<ManufacturersList />} />
          <Route path="models/new" element={<VehicleModelForm />} />
          <Route path="models/" element={<VehicleModelsList />} />
          <Route path="technicians/create" element={<TechnicianForm />} />
          <Route path="technicians" element={<TechnicianList/>} />
          <Route path="appointments/create" element={<AppointmentForm />} />
          <Route path="appointments" element={<AppointmentList />} />
          <Route path="appointments/history" element={<ServiceHistoryList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
