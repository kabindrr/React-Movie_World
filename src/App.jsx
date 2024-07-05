import "./App.css";
import { Button } from "react-bootstrap";
import { Display } from "./components/Display";
import { Hero } from "./components/Hero";

const App = () => {
  return (
    <div className="wrapper">
      {/* hero section */}
      <Hero />
      {/* Display Section */}
      <Display />
    </div>
  );
};

export default App;
