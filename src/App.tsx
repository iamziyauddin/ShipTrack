import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ShipsList from "./components/ShipsList/ShipsList";
import ShipDetail from "./components/ShipDetail/ShipDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ShipsList />} />
            <Route path="/ship/:id" element={<ShipDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
