import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import NewPostPage from "./pages/NewPostPage";
import FollowersPage from "./pages/FollowersPage";
import FollowingPage from "./pages/FollowingPage";
import AllUsersPage from "./pages/AllUsersPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/newpost" element={<NewPostPage />} />
          <Route path="/following" element={<FollowingPage />} />
          <Route path="/followers" element={<FollowersPage />} />
          <Route path="/allusers" element={<AllUsersPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

