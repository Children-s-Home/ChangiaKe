import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

// Page imports
import LogIn from "./Components/LogIn/LogIn";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Article from "./Components/Article/Article";
import Blog from "./Components/Blog/Blog";
import ChildrenHomeIndividual from "./Components/ChildrenHomeIndividual/ChildrenHomeIndividual";
import DonationVolunteeringFundraising from "./Components/DonationVolunteeringFundraising/DonationVolunteeringFundraising";
import SearchResults from "./Components/SearchResults/SearchResults";

import "./App.css";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Article" element={<Article />} />
        <Route
          path="/individualChildrenHome"
          element={<ChildrenHomeIndividual />}
        />
        <Route path="/Blog" element={<Blog />} />
        <Route
          path="/DonationVolunteeringFundraising"
          element={<DonationVolunteeringFundraising />}
        />
        <Route path="/SearchResults" element={<SearchResults />} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}

export default App;
