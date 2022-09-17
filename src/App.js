import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";

library.add(fas, far);
// adds all the icons not recommended on real projects

function App() {
  return (
    <>
      <Routes>
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
          exact
          element={
            <>
              <Navbar />
              <Profile />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
