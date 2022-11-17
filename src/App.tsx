import React from 'react';
import {Deer} from "./comps/Deer";
import {ModuleBasedDeer} from "./comps/deer/ModuleBasedDeer";
import logo from '../public/logo.svg';
import './styles/App.css';
import styles from "./comps/deer/Deer.module.scss";
import './styles/global.scss';
import {Fox} from "./comps/Fox";
import {ModuleBasedFox} from "./comps/fox/ModuleBasedFox";

function App() {

  return (
      <div id={"dashboards"}>
          <div className={"dashboard"}>
              <h1>Tradisjonelt dashboard</h1>
              <div className="cards">
                  <Deer />
                  <Fox />
              </div>
          </div>

          <div className={"dashboard"}>
              <h1>Here be modules</h1>
              <div className="cards">
                  <ModuleBasedDeer />
                  <ModuleBasedFox />
              </div>
          </div>
      </div>

  );
}

export default App;
