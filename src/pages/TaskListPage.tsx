import React, { Component } from 'react';
import TaskWrapper from '../component/TaskWrapper';
import TaskItem from '../component/TaskItem';

import Database from '../Database';

export default class TaskListPage extends Component{
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
    let keyNumber: number = 0;
    for(let item of data ){
      const {title, date, text} = item;
      TaskItem_container.push(<TaskItem title={title} date={date} text={text} key={keyNumber++} />)
    }
    Database.getData();
    
    return (
      <TaskWrapper>
        {TaskItem_container}
      </TaskWrapper>
    );
  }
}
