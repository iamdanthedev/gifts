import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
/**
 * Import all page components here
 */
// import SignIn from '../components/sign_in.js';
// import Register from '../components/register.js';
// import Logout from '../components/logout.js';
// import ForgotPassword from '../components/forgotPassword.js';
// import Homepage from '../components/homepage.js';
// import EditProfile from '../components/editProfile.js';
// import UsersList from '../components/users/usersList.js';
// import BigContainer from '../components/site/news/BigContainer.js';
// import ProfilePage from '../components/profile/ProfilePage.js'

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */


export default () => (
  <BrowserRouter>
    <div>
      {/* <Route path="/login" component={SignIn}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/logout" component={Logout}></Route>
      <Route path="/forgotpassword" component={ForgotPassword}></Route>

      <Route path="/edit" component={EditProfile}></Route>
      <Route path="/users" component={UsersList}></Route>
      <Route path="/news" component={BigContainer}></Route>
      <Route path="/profile" component={ProfilePage}></Route> */}
    </div>
  </BrowserRouter>
);
