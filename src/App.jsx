import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./component/Home/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgetPassworkPage from "./pages/ForgetPassworkPage";

const App = () => {
  return (
    <Router>
      <div className="fade-in-delay">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forget-password" element={<ForgetPassworkPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
