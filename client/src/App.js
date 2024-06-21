import { BrowserRouter, Route, Routes } from "react-router-dom";
import From from "./components/From";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import ProtectedRoute from "./Services/ProtectedRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
          <Route path="/form" element={<From />} />
          {/* <Route path="/" element= {<ProtectedRoute/>}> */}
            <Route path="/" element={<Home />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
