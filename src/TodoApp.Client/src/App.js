import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './Layout';
import Tasks from './components/Tasks/Tasks';
import "./App.scss";

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route path="/" exact component={Tasks} />
        <Route path="/project/:projectId" exact component={Tasks} />
      </Layout>
    );
  }
}
