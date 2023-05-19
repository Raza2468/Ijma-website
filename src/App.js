import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.min.css";
import "./App.css";
import SecondHeader from "./Pages/SecondHeader/SecondHeader";
import { About, Contact, Home, JoinIjma, Platform } from "./Pages/index";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';


export const App = () => {
  return (
    // <>
    //   <SecondHeader />
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/joinIjma" element={<JoinIjma />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
