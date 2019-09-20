import React, { Component } from 'react';

import './App.css';
// import './App.sass';
import { Button } from "react-bulma-components/full";
import { Hero } from "react-bulma-components/full";


class App extends Component {
  render() {
    return (
      <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                </img>
              </a>

              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
  </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">
                  Home
      </a>

                <a className="navbar-item">
                  Documentation
      </a>

                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">
                    More
        </a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item">
                      About
          </a>
                    <a className="navbar-item">
                      Jobs
          </a>
                    <a className="navbar-item">
                      Contact
          </a>
                  
                      <a className="navbar-item">
                        Report an issue
                       
          </a>
       
        </div>
                  </div>
                </div>

                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons">
                      <a className="button is-primary">
                        <strong>Sign up</strong>
                      </a>
                      <a className="button is-light">
                        Log in
          </a>
                    </div>
                  </div>
                </div>
              </div>
</nav>

<div className="container is-fluid">
  <div className="notification">
    This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
    viewport size.
  </div>
</div>


<div className="frameW container is-fluid">



<h1 className="title">Bulma</h1>
<p className="subtitle">
  Modern CSS framework based on{' '}
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
    Flexbox
</a>
</p>

<div className="field">
  <div className="control">
    <input className="input" type="text" placeholder="Input" />
  </div>
</div>

<div className="field">
  <p className="control">
    <span className="select">
      <select>
        <option>Select dropdown</option>
      </select>
    </span>
  </p>
</div>

<div className="buttons">
  <a className="button is-primary">Primary</a>
  <a className="button is-link">Link</a>
</div>
</div>


      </div>
 
          );
        }
      }
      
export default App;