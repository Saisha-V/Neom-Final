import { Route, Routes } from "react-router-dom";

import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import FavPage from "./pages/FavPage";
import UpcomingEvents from "./pages/UpcomingEvents";
import Feedback from "./pages/Feedback";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignupPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/dashboard" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/favorites" element={<FavPage />} />
      <Route path="/upcoming_events" element={<UpcomingEvents />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
