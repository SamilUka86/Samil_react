import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Destination from './components/Destination';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Help from './components/Help';
import us from './assets/us.png';
import india from './assets/india.png';
import paris from './assets/paris.png';

export default function MainR() {
  const prod = [
    {
      pic: us,
      name: 'United States',
      desc: 'Known for its diverse landscapes, vibrant cities, and iconic landmarks like the Statue of Liberty and the Grand Canyon. A melting pot of cultures and history.'
    },
    {
      pic: india,
      name: 'India',
      desc: 'A vast and vibrant country famed for its rich history, spiritual traditions, and architectural marvels like the Taj Mahal. Experience incredible diversity and culinary wonders.'
    },
    {
      pic: paris,
      name: 'Paris',
      desc: 'The capital of France, globally renowned for its art, fashion, gastronomy, and culture. Stroll through the romantic streets and view the iconic Eiffel Tower.'
    }
  ];

  return (
    <>
      <Router>
        <div className="navbar-container">
          <ul className="nav-links">
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/destination">Destination</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
        </div>

        <div className="main-content">
          <Routes>
            <Route path="/booking" element={<Booking />} />
            <Route path="/destination" element={<Destination items={prod} />} />
            <Route path="/gallery" element={<Gallery items={prod} />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
