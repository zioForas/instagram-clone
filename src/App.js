import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Routes, Route, Navigate } from "react-router-dom";
import ModalSettings from "./components/ModalSettings";
import Login from "./pages/Login";
import ProfileEdit from "./pages/ProfileEdit";
import Settings from "./pages/Settings";
import ChangePassword from "./pages/ChangePassword";

library.add(fas, far);

function App() {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/accounts/login" element={<Login />}></Route>
        <Route
          path="/accounts"
          element={
            <>
              <Navbar />
              <Settings />
            </>
          }
        >
          <Route index element={<Navigate to="edit" replace />} />
          <Route path="edit" element={<ProfileEdit />} />
          <Route path="password" element={<ChangePassword />} />
        </Route>


        <Route
          path="/"
          exact
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/swordanto"
          element={
            <>
              <Navbar />
              <Profile setIsSettingsModalOpen={setIsSettingsModalOpen} />
            </>
          }
        ></Route>
      </Routes>
      <ModalSettings
        open={isSettingsModalOpen}
        setOpen={setIsSettingsModalOpen}
      />
    </>
  );
}

export default App;
