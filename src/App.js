import { Fragment } from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";

//components
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const token = 1;

  if (token == 0) {
    return (
      <Fragment>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Fragment>
  );
}

export default App;
