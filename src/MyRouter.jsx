import { Routes, Route } from "react-router-dom";
import App from "./App";
import WhiteRabbit from "./components/WhiteRabbit";
import Contact from "./components/Contact";
import NavBar from "./NavBar";

const MyRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/white-rabbit" element={<WhiteRabbit />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default MyRouter;
