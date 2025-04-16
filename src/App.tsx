import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Rooms from './pages/Rooms';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/rooms" element={<Rooms />} />
    </Routes>
  );
};

export default App;
