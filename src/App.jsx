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
import TermsCondition from "./pages/Terms&Condition/TermsCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import SheetalProfile from "./pages/Profile/sheetalProfile/SheetalProfile";
import RefundCancelation from "./pages/RefundCancelation/RefundCancelation";
import ContactUs from "./pages/ContactUs/Contactus";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Header />}></Route> */}
          <Route path="/" element={<Home />}></Route>
          
          {/* <Route path="/" element={<Header />}></Route> */}
          <Route path="/login" element={<Login path="Login" />}></Route>
          <Route path="/signup" element={<Signup path="Signup" />}>
            {" "}
          </Route>
          <Route path="/signupartist" element={<SignUpArtist path="Signup" />}>
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
          <Route path="/askform" element={<AskForm  path="Ask Form"/>}>
            {" "}
          </Route>
          <Route path="/forgetpassword" element={<ForgetPassword/>}>
            {" "}
          </Route>
          <Route path="/resetpassword" element={<ResetPassword/>}>
            {" "}
          </Route>
          <Route path="/makeup" element={<MakeupSearch path="Makeup Artist"/>}>
            {" "}
          </Route>
          <Route path="/hairstyle" element={<HairStyle path="Hair Stylish"/>}>
            {" "}
          </Route>
          <Route path="/nailart" element={<Nailart path="Nail Artist" />}>
            {" "}
          </Route>
          <Route path="/henna" element={<Hennaart path="Henna Artist" />}>
            {" "}
          </Route>
          <Route path="/fashion" element={<Fashionart path="Fashion Stylish" />}>
            {" "}
          </Route>
          <Route path="/dance" element={<Danceart path="Dancer" />}>
            {" "}
          </Route>
          <Route path="/music" element={<Musicart path="Musician" />}>
            {" "}
          </Route>
          <Route path="/paint" element={<Paintart path="Painters" />}>
            {" "}
          </Route>
          <Route path="/writer" element={<Writeart path="Writer" />}>
            {" "}
          </Route>
          <Route path="/teacher" element={<Teacherart path="Writer" />}>
            {" "}
          </Route>
          <Route path="/contact " element={<Signup path="Sign Up"/>}>
            {" "}
          </Route>
          <Route path="/askform" element={<AskForm path="Ask Form" />}>
            {" "}
          </Route>
          <Route path="/termscondition" element={<TermsCondition path="Terms & Condition" />}>
            {" "}
          </Route>
          <Route path="/privacypolicy" element={<PrivacyPolicy path="Privacy Policy"/>}>
            {" "}
          </Route>
          <Route path="/sheetal" element={<SheetalProfile />}>
            {" "}
          </Route>
          <Route path="/refundcancelation" element={<RefundCancelation path="Reafund & Cancelation"/>}>
            {" "}
          </Route>
          <Route path="/contactus" element={<ContactUs path="Contactus"/>}>
            {" "}
          </Route>
          {/* <Route path="/seeratgill" element={<SeeratGillProfile/>}>
            {" "}
          </Route> */}
          {/* /profile/sheetal*/}

          {/* /refundcancelation*/}

          {/*  <Route path="/dynamicform" element={<DynamicForm />}> </Route>
          <Route path="/coverpage" element={<Coverpage />}> </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
