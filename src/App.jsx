import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")

    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        about="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

       {/* <About/> */}
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
          <About />
          </Route>
        
          <Route exact path="/">
          <TextForm heading="Enter text here to analyze" />
          </Route>
        </Switch>
        {/* <About/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
