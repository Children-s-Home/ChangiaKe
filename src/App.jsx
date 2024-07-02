import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import "./App.css";

// Page imports
import LogIn, {
  action as logInAction,
  loader as logInLoader,
} from "./Components/LogIn/LogIn";
import Register, {
  action as registerAction,
} from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import { action as messageAction } from "./Components/AboutUs/Contact";
import AboutUs from "./Components/AboutUs/AboutUs";
import Article from "./Components/Article/Article";
import Blog from "./Components/Blog/Blog";
import ChildrenHomeIndividual from "./Components/ChildrenHomeIndividual/ChildrenHomeIndividual";
import SearchResults from "./Components/SearchResults/SearchResults";
import Donation from "./Components/Impact/Donate/Donation";
import Fundraising from "./Components/Impact/Fundraise/Fundraising";
import Volunteering from "./Components/Impact/Volunteer/Volunteering";
import ImpactLayout from "./Components/Impact/ImpactLayout";
import AppLayout from "./AppLayout";
import Dashboard from "./Components/Host/DashBoard/Dashboard";
import EditPost from "./Components/Host/EditPost/EditPost";

import { requireAuth } from "./Components/LogIn/fakeAuth";

function App() {
  localStorage.setItem("isLoggedIn", false);
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/logIn"
          element={<LogIn />}
          action={logInAction}
          loader={logInLoader}
        />
        <Route
          path="/register"
          element={<Register />}
          action={registerAction}
        />
        <Route path="/AboutUs" element={<AboutUs />} action={messageAction} />
        <Route path="/Article" element={<Article />} />
        <Route
          path="/individualChildrenHome"
          element={<ChildrenHomeIndividual />}
        />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/SearchResults" element={<SearchResults />} />
        <Route path="/Impact" element={<ImpactLayout />}>
          <Route index element={<Navigate replace to="donate" />} />
          <Route path="donate" element={<Donation />} />
          <Route path="fundraise" element={<Fundraising />} />
          <Route path="volunteer" element={<Volunteering />} />
        </Route>

        <Route
          path="/dashboard"
          element={<Dashboard />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="/editPost"
          element={<EditPost />}
          loader={async () => await requireAuth()}
        />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}

export default App;
