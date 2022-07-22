import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Catalog from "./components/Catalog/Catalog";

function App() {
  return (
    <div id="container">

      <Navbar />

      <main id="site-content">
        <Routes>
          <Route path="/" element={<Catalog/>} />
          {/* <Route path="/" element={<Catalog />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
