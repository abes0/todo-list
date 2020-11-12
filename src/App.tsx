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
    const TaskItem_container = [];

    interface TaskData {
      title: string,
      date: string,
      text: string,
    };

    const data: Array<TaskData> = [
      {
        title: "洗濯",
        date: "2020 11.11",
        text: "がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！",
      },
      {
        title: "掃除",
        date: "2020 11.12",
        text: "ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！",
      },
      {
        title: "料理",
        date: "2020 11.13",
        text: "だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！",
      },
      {
        title: "洗濯",
        date: "2020 11.11",
        text: "がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！",
      },
      {
        title: "掃除",
        date: "2020 11.12",
        text: "ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！",
      },
      {
        title: "料理",
        date: "2020 11.13",
        text: "だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！",
      },
      {
        title: "洗濯",
        date: "2020 11.11",
        text: "がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！",
      },
      {
        title: "掃除",
        date: "2020 11.12",
        text: "ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！",
      },
      {
        title: "料理",
        date: "2020 11.13",
        text: "だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！",
      },
      {
        title: "洗濯",
        date: "2020 11.11",
        text: "がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！がんばれ！",
      },
      {
        title: "掃除",
        date: "2020 11.12",
        text: "ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！ふんばれ！",
      },
      {
        title: "料理",
        date: "2020 11.13",
        text: "だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！だんじり！",
      },
    ]
    for(let item of data ){
      const {title, date, text} = item;
      TaskItem_container.push(<TaskItem title={title} date={date} text={text} />)
    }
    return (
      <div className="App">
        <TaskWrapper>
          {TaskItem_container}
        </TaskWrapper>
      </div>
    );
  }
}
