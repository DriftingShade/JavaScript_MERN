import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import BooksList from "./views/BooksList";
import BookDetails from "./views/BookDetails";
import AddBook from "./views/AddBook";
import UpdateBook from "./views/UpdateBook";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/catalog" />} />
        <Route path="/catalog" element={<BooksList />} />
        <Route path="/books/:id/details" element={<BookDetails />} />
        <Route path="/create" element={<AddBook />} />
        <Route path="/books/:id/update" element={<UpdateBook />} />
      </Routes>
    </Router>
  );
};

export default App;
