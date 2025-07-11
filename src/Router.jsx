import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import ProfileList from "./pages/ProfileList";
import ProfileDetails from "./pages/ProfileDetails";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/auth" element={<Authenticate />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/profiles" element={<ProfileList />} />
        <Route path="/profiles/detail" element={<ProfileDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
