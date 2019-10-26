import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import Layout from './Layout';
import Tasks from './components/Tasks/Tasks';
import "./App.scss";

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Tasks} />
          <Route path="/project/:projectId" exact component={Tasks} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}
