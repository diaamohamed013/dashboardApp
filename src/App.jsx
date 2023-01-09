import { Routes, Route } from "react-router-dom";
import HomeDashboard from "./Components/HomeDashboard/HomeDashboard";
import HomeBooking from "./Components/HomeBooking/HomeBooking";
import NotFound from "./Components/NotFound/NotFound";
import GoToTop from "./GoToTop/GoToTop";
function App() {
  return (
    <>
      <GoToTop />
      <Routes>
        <Route path="/" element={<HomeBooking />}></Route>
        <Route path="/dashboard" element={<HomeDashboard />}></Route>
        <Route path="/booking" element={<HomeBooking />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </>

  );
}

export default App;
