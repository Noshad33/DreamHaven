import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Properties from "./Pages/Properties";
import Agents from "./Pages/Agents";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard";
import AddProperty from "./Pages/Add-property";
import MyListings from "./Pages/MyListings";
import Contact from "./pages/Contact";
import Inquiries from "./pages/Inquiries";
import PropertyDetail from "./Pages/PropertyDetail";
import AgentProfile from "./pages/AgentProfile";
import About from "./pages/About";
import ContactSeller from "./Pages/ContactSeller";
import Admin from "./Pages/Admin";
import Favorites from "./Pages/Favorites";
import ProtectedRoute from "./Components/ProtectedRoute";
import AdminRoute from "./Components/AdminRoute";
import Footer from "./Components/Footer";








function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/agents" element={<Agents />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-listings" element={<MyListings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inquiries" element={<Inquiries />} />
           <Route path="/property/:id" element={<PropertyDetail />} />
           <Route path="/agent-profile" element={<AgentProfile />} />
           <Route path="/contact-seller/:id"element={<ContactSeller />}/>
            <Route path="/add-property"element={ <ProtectedRoute><AddProperty /></ProtectedRoute>}/>
            <Route path="/dashboard" element={ <ProtectedRoute> <Dashboard /></ProtectedRoute>}/>
            {/* <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>}/> */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/favorites" element={ <ProtectedRoute><Favorites /></ProtectedRoute>}/>

      </Routes>
       <Footer />
    </Router>
  );
}

export default App;