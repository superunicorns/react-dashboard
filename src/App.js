import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
            {/* 
            <Route path="/team" element={<Team />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/projects" element={<Projects />} />
            */}
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
