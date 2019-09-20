import React, { Component } from 'react';
import './list.css'


class List extends Component {

  state = {
    lists: [{ task: 'hello' }, { task: "hi" }]
  };

  render() {
    const { list } = this.props;

    return (
      <div className="list">
        {list.map(thing => (
          <li>{thing.task}</li>
        ))}




      </div>

    );

  }
}



export default List;