import "./App.css";
import "./assets/utils.css";
import Home from "./pages/Home/Home";
import ExploreApp from "./pages/ExploreApp/ExploreApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import ArtistSearch from "./pages/ArtistSearch/ArtistSearch";
import Header from "./Components/Header/Header";
import Profile from "./pages/Profile/Profile";
import AskForm from "./Components/AskForm/AskForm";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Header />}></Route> */}
          <Route path="/" element={<Home />}></Route>
          
          {/* <Route path="/" element={<Header />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}>
            {" "}
          </Route>
          <Route path="/explore" element={<ExploreApp />}>
            {" "}
          </Route>
          <Route path="/artist" element={<ArtistSearch />}>
            {" "}
          </Route>
          <Route path="/profile" element={<Profile />}>
            {" "}
          </Route>
          <Route path="/askform" element={<AskForm />}>
            {" "}
          </Route>
          <Route path="/forgetpassword" element={<ForgetPassword/>}>
            {" "}
          </Route>
          <Route path="/resetpassword" element={<ResetPassword/>}>
            {" "}
          </Route>

          {/*  <Route path="/dynamicform" element={<DynamicForm />}> </Route>
          <Route path="/coverpage" element={<Coverpage />}> </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
