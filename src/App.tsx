import React, { Component } from 'react';
import './App.css';
// import ButtonItem from './component/ButtonItem';
import TaskWrapper from './component/TaskWrapper';
import TaskItem from './component/TaskItem';

export default class App extends Component{
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <TaskWrapper>
          <TaskItem title="DS" date="2020 11.11" text="がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！" />
        </TaskWrapper>
      </div>
    );
  }
}
