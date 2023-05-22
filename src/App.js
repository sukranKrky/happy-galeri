
import Dashboard from "./layouts/Dashboard";
import Footer from "./layouts/Footer";
import Navi from "./layouts/Navi";

function App() {
 
  return ( 
    <div className="App absolute w-screen bg-white">
      <div className="navbar my-8 h-12">
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
