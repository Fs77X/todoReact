import React, { Component } from 'react';
import './list.css'


class List extends Component{
    state = {
        lists: []
      };
    
      addList = (newItem) => {
          this.setState({
           
          });
          

      }

      render(){
        return(
          <div>
            {/* <div className = "list">
            {this.state.lists.map(list => (
              <li>{list.item}</li>
            ))}
            </div> */}
    
           

          </div>

        );

      }
}



export default List;