import React from "react";
import "./App.css";
import mf from "./pics/75257.jpg";
import p from "./pics/21044.jpg";
import DSK from "./pics/75236.jpeg";
import JT from "./pics/76159.jpeg";
import DSii from "./pics/40407.jpeg";
import ewok from "./pics/7956.jpg";

function App() {
  return (
    <div className="App">
      <h1>Brian Loveless Loves Lego!</h1>
      <h2>Owned Sets:</h2>
      <ul>
        <li>Millennium Falcon # 75257 </li>
        <li>
          <img class="pic" src={mf} alt="Millennium Falcon Lego" />
        </li>
        <li>Paris # 21044</li>
        <li>
          <img class="pic" src={p} alt="Paris France Lego" />
        </li>
        <li>Duel on Starkiller # 75236</li>
        <li>
          <img class="pic" src={DSK} alt="Duel on Starkiller base Lego" />
        </li>
        <li>Joker's Trike # 76159</li>
        <li>
          <img class="pic" src={JT} alt="Joker's Trike Lego" />
        </li>
        <li>D S II Battle # 40407</li>
        <li>
          <img class="pic" src={DSii} alt="Death Star 2 battle Lego" />
        </li>
        <li>Ewok Attack # 7956 </li>
        <li>
          <img class="pic" src={ewok} alt="Ewok attack Lego" />
        </li>
        <li></li>
      </ul>
      <h2>Wish-list:</h2>
    </div>
  );
}

export default App;
