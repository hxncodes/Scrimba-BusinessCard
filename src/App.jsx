import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Intereste";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
