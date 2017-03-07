import React from "react";
import { Route, IndexRoute } from "react-router";

// Base App
import AppContainer from "techbikers/app/containers/AppContainer";
import Home from "techbikers/app/components/pages/Home";
import About from "techbikers/app/components/pages/About";
import Charity from "techbikers/app/components/pages/Charity";
import NotFound from "techbikers/app/components/pages/NotFound";

// Chapters
import ChapterDetails from "techbikers/chapters/containers/ChapterDetails";

// Rides
import Rides from "techbikers/rides/containers/Rides";
import RideDetails from "techbikers/rides/containers/RideDetails";

// Auth
import AuthComplete from "techbikers/auth/containers/AuthComplete";
import LoginPage from "techbikers/auth/containers/LoginPage";
import SignupPage from "techbikers/auth/containers/SignupPage";
import PasswordReset from "techbikers/auth/containers/PasswordReset";
import PasswordResetConfirm from "techbikers/auth/containers/PasswordResetConfirm";

// Sponsors
import SponsorsPage from "techbikers/sponsors/containers/SponsorsPage";

// Users
import Account from "techbikers/users/containers/Account";
import Profile from "techbikers/users/containers/Profile";

// Fundraising
import Leaderboard from "techbikers/fundraisers/containers/Leaderboard";

export default (
  <Route>
    // # Auth Response Handler
    <Route path="/auth/complete/:backend" component={AuthComplete} />

    // # Main App handler
    <Route path="/" component={AppContainer}>
      // ## Core Pages
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="the_charity" component={Charity} />
      <Route path="sponsors" component={SponsorsPage} />

      // ## Authentication and Account
      <Route path="login" component={LoginPage} />
      <Route path="signup" component={SignupPage} />
      <Route path="account" component={Account} />
      <Route path="password">
        <Route path="reset">
          <IndexRoute component={PasswordReset} />
          <Route path=":uid/:token" component={PasswordResetConfirm} />
        </Route>
      </Route>

      // ## Ride Routing
      <Route path="rides">
        <IndexRoute component={Rides} />
        <Route path=":id(/:slug)" component={RideDetails} />
      </Route>

      // ## Rider Routing
      <Route path="riders/:id" component={Profile} />

      // ## Fundraising
      <Route path="donate" component={Leaderboard} />

      // ## Chapter Routing
      <Route path="chapters">
        <Route path=":name" component={ChapterDetails} />
      </Route>

      // ## Error handling
      <Route path="*" component={NotFound}/>
    </Route>
  </Route>
);
