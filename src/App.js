import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import OpenRoute from "./components/core/Auth/OpenRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Error from "./pages/Error";
import Settings from "./components/core/Dashboard/Settings";
import { useDispatch, useSelector } from "react-redux";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart";
import { ACCOUNT_TYPE } from "./utils/constants";
import AddCourse from "./components/core/Dashboard/AddCourse";
import MyCourses from "./components/core/Dashboard/MyCourses";
import EditCourse from "./components/core/Dashboard/EditCourse";
import Catalog from "./pages/Catalog";
import CourseDetails from "./pages/CourseDetails";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails from "./components/core/ViewCourse/VideoDetails";
import Instructor from "./components/core/Dashboard/InstructorDashboard/Instructor";
import Why from "./components/core/AboutPage/Why";
import DirectorMessage from "./components/core/AboutPage/DirectorMessage";
import MissionVision from "./components/core/AboutPage/MissionVision";
import FacilitiesWEProvide from "./components/core/AboutPage/FacilitiesWEProvide";
import Album from "./components/core/Gallery/Album";
import Video from "./components/core/Gallery/Videos"
import AcedemicTeam from "./components/core/AboutPage/AcedimcTeam"
import Results from "./components/core/Result";
import ContactUs from "./components/core/ContactUs"
import Class7t10 from "./components/core/CoursesAndFee.js/Class7t10.js"
import Class11t12 from "./components/core/CoursesAndFee.js/Class11t12"
import WhatsAppIcon from "./components/ui-elements/WhatsappIcon"
import IITJEENEET from "./components/core/CoursesAndFee.js/IITJEENEET"
import AdminLogin from "./components/core/AdminLogin/AdminLogin"
import AdminLogout from "./components/core/AdminLogin/AdminLogout"

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.profile);
  const state = useSelector((state) => state);
 

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <WhatsAppIcon/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="catalog/:catalogName" element={<Catalog />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />
        <Route path="/why-oc" element={<Why />} />
        <Route path="/our-director" element={<DirectorMessage />} />
        <Route path="/mission-vision" element={<MissionVision />} />
        <Route path="/student-journey" element={<FacilitiesWEProvide />} />
        <Route path="/album" element={<Album />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/acedmic-team" element={<AcedemicTeam />} />
        <Route path="/result" element={<Results />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/class-6t10" element={<Class7t10 />} />
        <Route path="/class-11t12" element={<Class11t12 />} />
        <Route path="/iit-jee-neet" element={<IITJEENEET />} />
        <Route path="admin-panel" element={<AdminLogin />} />
        <Route path="admin-logout" element={<AdminLogout />} />

        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />

        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />

          <Route path="dashboard/Settings" element={<Settings />} />

          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route path="dashboard/cart" element={<Cart />} />
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
            </>
          )}

          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/instructor" element={<Instructor />} />
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
            </>
          )}
        </Route>

        <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
