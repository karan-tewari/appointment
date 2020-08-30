import React from 'react';

import Home from './components/Home';
import AddLocation from './components/AddLocation'
import LocationTimings from './components/LocationTimings';
import MyTables from './components/MyTables';


import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/addfacilities" component={LocationTimings} />
        <Route path="/showlocations" component={MyTables} />
        <Route path="/addLocation" component={AddLocation} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
