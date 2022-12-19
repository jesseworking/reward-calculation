import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import Transaction from "pages/Transaction";
import TransactionByCustomer from "pages/TransactionByCustomer";
import "styles/global.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/transaction" element={<Transaction />} />
        <Route
          exact
          path="/transaction/:customerId"
          element={<TransactionByCustomer />}
        />
        <Route path="*" element={<Navigate to="/transaction" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
