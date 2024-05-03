import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import RSO from './RSO';


function App() {
  // const path = winow.location.href.split("/"); // Get current url
  // const [color, setColor] = useState("#333"); 
  // const[home ] -> working on making navbar state var so doesn't show up in RSO page
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/RSO" element={<RSO />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
