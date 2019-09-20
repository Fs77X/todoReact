import React, { Component } from 'react';
import './inputBar.css'

class inputBar extends Component {

    render() {
        const { item, handleChange, handleSubmit } = this.props;
        return (
            <div className='text'>
                <h1 className='top'>ToDo</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="add todo..."
                        value={item}
                        onChange={handleChange}
                    ></input>
                    <button type="submit" onSubmit={handleSubmit}>Add!</button>
                </form>


            </div>

        );
    }
}

export default inputBar;