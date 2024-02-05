import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingResponsive from "./pages/LandingResponsive";
import BrowseArt from "./pages/BrowseArt";
import SelectedItem from "./pages/SelectedItem";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/browse-art":
        title = "";
        metaDescription = "";
        break;
      case "/selected-item":
        title = "";
        metaDescription = "";
        break;
      case "/profile-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingResponsive />} />
      <Route path="/browse-art" element={<BrowseArt />} />
      <Route path="/selected-item" element={<SelectedItem />} />
      <Route path="/profile-page" element={<ProfilePage />} />
    </Routes>
  );
}
export default App;
