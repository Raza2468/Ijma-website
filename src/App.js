import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.min.css";
import "./App.css";
import SecondHeader from "./Pages/SecondHeader/SecondHeader";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

export const App = () => {
  return (
    // <>
    //   <SecondHeader />
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SecondHeader />} />
      </Routes>
    </BrowserRouter>
  );
};
