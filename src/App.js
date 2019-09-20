import React, { Component } from 'react';
import List from './List';
import InputBar from './inputBar';
import './App.css';
import uuid from'uuid';
// import './App.sass';
// import { Button } from "react-bulma-components/full";
// import { Hero } from "react-bulma-components/full";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      list: [],
      id: 0
    }
  }


  handleChange = (e) => {
    this.setState({
      newTask: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault(); 
    const newItem = {
      id: this.state.id,
      task: this.state.newTask
    }
    console.log(newItem);

    const updatedList = [...this.state.list, newItem]
    this.setState({
      newTask: "",
      list: updatedList,
      id: uuid()
    })

  }






  render() {
    return (
      <div>
        hello
        <InputBar item={this.state.newTask} 
        handleChange = {this.handleChange}
        handleSubmit = {this.handleSubmit}/>
        <List list = {this.state.list}/>



      </div>

    );
  }
}

export default App;