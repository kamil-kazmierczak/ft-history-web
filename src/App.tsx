import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { HistoryComponent } from "./components/HistoryComponent";

const App = () => (
  <div className="container">
        <HistoryComponent />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
