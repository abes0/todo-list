import React, { Component } from 'react';
import './App.css';
import TaskListPage from './pages/TaskListPage';

export default class App extends Component{
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <TaskListPage />
      </div>
    );
  }
}
