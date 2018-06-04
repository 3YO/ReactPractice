import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import './App.css';

import Layout from './components/Layout/Layout';
import MyApps from './containers/MyApps/MyApps';
import Profile from './containers/Profile/Profile';

class App extends Component {
  render() {
    return (
      <div className="">
        <Layout>
          <p> in App</p>
          <Route path="/" exact component={MyApps} />
          <Route path="/profile" exact component={Profile}/>

        </Layout>
      </div>
    );
  }
}

export default App;
