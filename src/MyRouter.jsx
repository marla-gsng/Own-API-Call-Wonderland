import { Routes, Route } from "react-router-dom";
import App from "./App";
import WhiteRabbit from "./components/WhiteRabbit";
import Contact from "./components/Contact";
import NavBar from "./NavBar";
import Characters from "./components/Characters";

const MyRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/white-rabbit" element={<WhiteRabbit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/characters/:id" element={<Characters />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
};

export default MyRouter;
