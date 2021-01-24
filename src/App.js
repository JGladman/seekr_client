import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {Jobs} from "./features/JobInfo/Jobs";
import './App.css';

function App() {
  return (
    <div>
      {Jobs()}
=======

import { SortContainer } from './components/SortContainer/SortContainer';
import { CreateApplicationForm } from './components/CreateApplicationForm/CreateApplicationForm';
import './stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <SortContainer />
      <CreateApplicationForm />
>>>>>>> main
    </div>
  );
}

export default App;
