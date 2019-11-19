import React from 'react';
import { element } from "prop-types";

import Header from './shared/components/layout/Header';
import Content from './shared/components/layout/Content';
import Footer from './shared/components/layout/Footer';

import './App.css';

const App = props => (
  <div className="App">
    <div className="App">
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </div>
  </div>
);

App.propTypes = {
  children: element,
};

export default App;
