import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";

// CSS imports
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
// Icons imports
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";
// Animate On Scroll import
import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import the Gallery Light Box:
import "glightbox/dist/css/glightbox.min.css";

// React App import
import App from "./App";

// Project Details Pages

// Python Projects
import BikeShare from "./details/python/bikeshare.jsx";
import EmergencyCalls from "./details/python/emergencycalls.jsx";
import Finance from "./details/python/finance.jsx";
import Ecommerce from "./details/python/ecommerce.jsx";
import Advertising from "./details/python/advertising.jsx";
import Knn from "./details/python/knn.jsx";
import LoanPayment from "./details/python/loanpayment";
import IrisFlower from "./details/python/irisflower";
import Universities from "./details/python/universities";
import Yelp from "./details/python/yelp";
import BanknoteAuth from "./details/python/banknoteauth";

// HTML / CSS Projects
import Survey from "./details/web/survey";
import Tribute from "./details/web/tribute";
import TechnicalDocs from "./details/web/technicaldoc";
import LandingPage from "./details/web/landingpage";
import PersonalPortfolio from "./details/web/personalportfolio";

// Javascript Projects
import Palindrome from "./details/java/palindrome";
import RomanNumeral from "./details/java/romannumeral";
import TelNumberValidator from "./details/java/telnumbervalidator";
import CashRegister from "./details/java/cashregister";
import Pokemon from "./details/java/pokemon";

//React Projects
import Quotes from "./details/react/quotes";
import MarkdownPreview from "./details/react/markdownpreview";
import Drum from "./details/react/drum";
import Calculator from "./details/react/calculator";
import Pomodoro from "./details/react/pomodoro";

// Visualization Projects
import BarChart from "./details/viz/barchart";
import Scatterplot from "./details/viz/scatterplot";
import Heatmap from "./details/viz/heatmap";
import Choropleth from "./details/viz/choropleth";
import Treemap from "./details/viz/treemap";

// API Projects
import Daleo from "./details/api/daleo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />{" "}
        <Route path="/python/bike_share/" element={<BikeShare />} />
        <Route path="/python/emergency_calls/" element={<EmergencyCalls />} />
        <Route path="/python/finance/" element={<Finance />} />
        <Route path="/python/ecommerce/" element={<Ecommerce />} />
        <Route path="/python/advertising/" element={<Advertising />} />
        <Route path="/python/knn/" element={<Knn />} />
        <Route path="/python/loanpayment/" element={<LoanPayment />} />
        <Route path="/python/irisflower" element={<IrisFlower />} />
        <Route path="/python/universities" element={<Universities />} />
        <Route path="/python/yelp" element={<Yelp />} />
        <Route path="/python/banknoteauth" element={<BanknoteAuth />} />
        <Route path="/web/survey" element={<Survey />} />
        <Route path="/web/tribute" element={<Tribute />} />
        <Route path="/web/technicaldocs" element={<TechnicalDocs />} />
        <Route path="/web/landingpage" element={<LandingPage />} />
        <Route path="/web/personalportfolio" element={<PersonalPortfolio />} />
        <Route path="/java/palindrome" element={<Palindrome />} />
        <Route path="/java/romannumeral" element={<RomanNumeral />} />
        <Route
          path="/java/telnumbervalidator"
          element={<TelNumberValidator />}
        />
        <Route path="/java/cashregister" element={<CashRegister />} />
        <Route path="/java/pokemon" element={<Pokemon />} />
        <Route path="/react/quotes" element={<Quotes />} />
        <Route path="/react/markdownpreview" element={<MarkdownPreview />} />
        <Route path="/react/drum" element={<Drum />} />
        <Route path="/react/calculator" element={<Calculator />} />
        <Route path="/react/pomodoro" element={<Pomodoro />} />
        <Route path="/viz/barchart" element={<BarChart />} />
        <Route path="/viz/scatterplot" element={<Scatterplot />} />
        <Route path="/viz/heatmap" element={<Heatmap />} />
        <Route path="/viz/choropleth" element={<Choropleth />} />
        <Route path="/viz/treemap" element={<Treemap />} />
        <Route path="/api/daleo" element={<Daleo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
