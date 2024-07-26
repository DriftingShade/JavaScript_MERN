import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import CompanyList from "./views/CompanyList";
import CompanyDetails from "./views/CompanyDetails";
import AddCompany from "./views/AddCompany";
import UpdateCompany from "./views/UpdateCompany";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<CompanyList />} />
        <Route path="/companies/:id/details" element={<CompanyDetails />} />
        <Route path="/create" element={<AddCompany />} />
        <Route path="/companies/:id/update" element={<UpdateCompany />} />
      </Routes>
    </Router>
  );
}

export default App;
