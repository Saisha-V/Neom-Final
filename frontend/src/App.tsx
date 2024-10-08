import { Route, Routes } from "react-router-dom";

import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/dashboard/HomePage";
import FavPage from "./pages/favourite/FavPage";
import UpcomingEvents from "./pages/upcoming/UpcomingEvents";
import Feedback from "./pages/feedback/Feedback";
import Settings from "./pages/settings/Settings";

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
