import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./AccountLogin/LoginPage.jsx"
import Navbar from "./Navbar/Navbar.jsx"
// import MainLayout from "./HomePage/MainLayout.jsx";
import HomeMaster from "./HomePage/HomeMaster.jsx";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
          <Route path="/home" element={[<Navbar/>,<HomeMaster/>]} />
          {/* <Route path="/home" element={<HomeMaster />} /> */}
          {/* <Route path="/home" element={[<Navbar/>,<MainLayout/>]} /> */}
          {/* <Route path="/home" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
