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
import MakeupSearch from "./pages/MakeupSearch/MakeupSearch";
import HairStyle from "./pages/HairstyleSearch/HairstyleSearch";
import Nailart from "./pages/NailartSeach/Nailart";
import Hennaart from "./pages/HennaSearch/Hennaart";
import Fashionart from "./pages/FashionSearch/Fashionart";
import Danceart from "./pages/DancerSearch/Danceart";
import Musicart from "./pages/MusicianSearch/Musicart";
import Paintart from "./pages/PainterSearch/Paintart";
import Writeart from "./pages/WritersSearch/Writeart";
import Teacherart from "./pages/SpecialSearch/Teacherart";
import SignUpArtist from "./pages/SIgnUpArtist/SignUpArtist";

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
          <Route path="/signupartist" element={<SignUpArtist />}>
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
          <Route path="/makeup" element={<MakeupSearch/>}>
            {" "}
          </Route>
          <Route path="/hairstyle" element={<HairStyle/>}>
            {" "}
          </Route>
          <Route path="/nailart" element={<Nailart />}>
            {" "}
          </Route>
          <Route path="/henna" element={<Hennaart />}>
            {" "}
          </Route>
          <Route path="/fashion" element={<Fashionart />}>
            {" "}
          </Route>
          <Route path="/dance" element={<Danceart />}>
            {" "}
          </Route>
          <Route path="/music" element={<Musicart />}>
            {" "}
          </Route>
          <Route path="/paint" element={<Paintart />}>
            {" "}
          </Route>
          <Route path="/writer" element={<Writeart />}>
            {" "}
          </Route>
          <Route path="/teacher" element={<Teacherart />}>
            {" "}
          </Route>
          <Route path="/contact " element={<Signup />}>
            {" "}
          </Route>

          {/* */}

          {/*  <Route path="/dynamicform" element={<DynamicForm />}> </Route>
          <Route path="/coverpage" element={<Coverpage />}> </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
