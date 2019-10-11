import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Tasks from './components/Tasks/Tasks';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route path='/tasks' component={Tasks} />
      </Layout>
    );
  }
}
