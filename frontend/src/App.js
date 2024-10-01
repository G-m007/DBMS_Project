import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component
import Home from './Home';
import About from './About';
import Jobs from './Jobform';
import Contact from './Contact';
import LoginSignup from './LoginSignup';

function App() {
  return (
    <Router>
      <div>
        <Navbar />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />

          <Route path="/candidate-login" element={<LoginSignup userType="candidate" />} />
          <Route path="/recruiter-login" element={<LoginSignup userType="recruiter" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// This is to check in git