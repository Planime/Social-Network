import React from 'react';
import {Route, Switch} from "react-router-dom"
import Profile from "../profile/Profile"
import Friends from "../friends/Friends"
import Messages from "../messages/Messages"
import Photos from "../photos/Photos"
import Videos from "../videos/Videos"


import styles from './Routes.module.scss';



const Routes = () => {

  return (
      <Switch>
          <Route path="/profile"><Profile/></Route>
          <Route path="/friends/:id?"><Friends/></Route>
          <Route path="/messages"><Messages/></Route>
          <Route path="/photos"><Photos/></Route>
          <Route path="/videos"><Videos/></Route>
      </Switch>
  );
};

export default Routes;
