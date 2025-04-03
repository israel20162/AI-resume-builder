import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Home from "./pages/HomePage.jsx";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./components/DashboardLayout";
import ResumeBuilder from "./pages/ResumeBuilder";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="resume-builder" element={<ResumeBuilder />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
