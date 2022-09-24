import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./AccountLogin/LoginPage.jsx"
import Navbar from "./Navbar/Navbar.jsx"
import HomeMaster from "./HomePage/HomeMaster.jsx";
import ChatLayout from "./Forum/ChatLayout.jsx";
import RightParticipantsPanel from "./Forum/RightParticipantsPanel.jsx";
import TitleList from "./HomePage/TitleList.jsx";
import Instructor from "./Navbar/Instructor.jsx";
import CertificateSub from "./Navbar/CertificateSub.jsx";
 
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/CertificateSub" element={<CertificateSub />}/>
        <Route path="/instructor" element={[<Navbar/>, <Instructor />]}/>
          <Route path="/home" element={[<Navbar/>,<HomeMaster/>]} />
          <Route path="/chat" element={[<Navbar/>, <ChatLayout/>, <RightParticipantsPanel/>]} />
          <Route path="/course" element={[<Navbar/>, <TitleList />]} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
