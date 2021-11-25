import React from 'react';
import {Route, Switch} from "react-router-dom"
import {EditMyProfile, Profile, Friends,
    Messages, Photos, Videos} from "../../pages"


import styles from './Routes.module.scss';



const Routes = () => {

  return (
      <Switch>
          <Route exact path="/profile"><Profile/></Route>
          <Route path="/profile/edit"><EditMyProfile/></Route>
          <Route path="/friends/:id?"><Friends/></Route>
          <Route path="/messages"><Messages/></Route>
          <Route path="/photos"><Photos/></Route>
          <Route path="/videos"><Videos/></Route>
      </Switch>
  );
};

export default Routes;
