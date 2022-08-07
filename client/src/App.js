import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Catalog from "./components/Catalog/Catalog";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Create from "./components/Create/Create";
import { AuthProvider } from "./contexts/authContext";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Logout from "./components/Logout/Logout";

//TODO handle notifications and server errors

function App() {
  return (
    <AuthProvider>
      <div id="body-container">
        <Navbar />

        <main id="site-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/details/:itemId" element={<Details/>} />
            <Route path="/details/:itemId/edit" element={<Edit/>} />
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
