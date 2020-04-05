import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/home'
import Profile from '../pages/profile'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
    </Switch>
  )
}

export default Routes