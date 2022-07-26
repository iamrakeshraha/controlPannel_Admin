import { Fragment } from "react";
import { Routes, Route, BrowserRouter, Redirect } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

//components
// import Header from './components/headers/Header'
import SignUp from "./pages/SignUp";

function App() {
  const token = 1;

  if (token == 0) {
    return (
      <Fragment>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />

          {/* <Route
            render={() => {
              return <Redirect to={<Login />} />;
            }}
          /> */}
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
