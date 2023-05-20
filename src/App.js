import "./App.css";
import Dashboard from "./layouts/Dashboard";
import Footer from "./layouts/Footer";
import Navi from "./layouts/Navi";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navi />
      </div>

      <div className="Dashboard">
        <Dashboard />
      </div>

      <div className="flooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
