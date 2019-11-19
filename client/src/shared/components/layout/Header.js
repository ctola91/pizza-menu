import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import './Header.scss';

const Header = () => (
  <header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <div className="logo"><h1>Pizza App</h1></div>
            </Grid.Column>
            <Grid.Column width={8}>
              <div className="navbar">
                <ul className="ui grid">
                  <li className="four wide column">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="four wide column">
                    <Link to="/toppings">Toppings</Link>
                  </li>
                  
                </ul>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </header>
);

export default Header;
