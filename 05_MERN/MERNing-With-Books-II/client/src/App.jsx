import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import BooksList from "./components/BooksList";
import BookDetails from "./components/BookDetails";
import AddBook from "./components/AddBook";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/catalog" />} />
        <Route path="/catalog" element={<BooksList />} />
        <Route path="/books/:id/details" element={<BookDetails />} />
        <Route path="/create" element={<AddBook />} />
      </Routes>
    </Router>
  );
};

export default App;
