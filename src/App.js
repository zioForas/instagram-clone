
import './App.css';
import Navbar from './components/Navbar.jsx';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Home from "./pages/Home"
import Profile from './pages/Profile';

library.add(fas, far);
// adds all the icons not recommended on real projects


function App() {
  return (
    <>
    <Navbar/>
    <Profile/>
    </>
    
  );
}

export default App;
