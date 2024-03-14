
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LicenseAgreement from "./Policy/LicenseAgreement";
import PrivacyPolicy from "./Policy/PrivacyPolicy";
import Termsandconditions from "./Policy/Termsandconditions";
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/LicenseAgreement" element={<LicenseAgreement />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Termsandconditions" element={<Termsandconditions />} />

          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
