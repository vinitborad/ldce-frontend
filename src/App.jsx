
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';
import Courses from './Pages/Academics/Intake/Courses';
import Departments from './Pages/Departments';
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence>

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admissions" element={<Courses />} />
            <Route path="/departments" element={<Departments />} />
          </Routes>
          <Footer />

        
      </AnimatePresence>
    </>
  );
}

export default App;
