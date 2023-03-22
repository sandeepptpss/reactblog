import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import NoPage from './Components/NoPage';

import Home from './Components/Home';
import About from './Components/About';
import User from './Components/User';
function App() {
return (
  <div className="App">
  <BrowserRouter>
  <Nav />
  <Routes>
  <Route path="/" element={<Home/>}/>
        <Route path="blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />
        <Route path="user" element={<User/>}/>
        <Route path="contact" element={<Contact />} />
        <Route path="/*" element={<NoPage />} />
        </Routes>
  </BrowserRouter>
  </div>
);
}
export default App;
