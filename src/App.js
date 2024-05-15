import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LicenseAgreement from "./Components/Policy/LicenseAgreement";
import PrivacyPolicy from "./Components/Policy/PrivacyPolicy";
import Termsandconditions from "./Components/Policy/Termsandconditions";
import PersonalData from "./Components/Policy/PersonalData";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/LicenseAgreement" element={<LicenseAgreement />} />
          <Route path="/" element={<LicenseAgreement />} />
          <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route exact path="/Termsandconditions" element={<Termsandconditions />} />
          <Route exact path="/PersonalData" element={<PersonalData />} />


          <Route />
        </Routes>
      </Router>
      {/* <LicenseAgreement/> */}
    </div>
  );
}
export default App;
