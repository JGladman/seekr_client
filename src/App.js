import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {Jobs} from "./features/JobInfo/Jobs";
import './App.css';

function App() {
  return (
    <div>
      {Jobs()}
    </div>
  );
}

export default App;
