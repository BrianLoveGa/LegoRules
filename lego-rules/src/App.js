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
      <ul>
        <li class="big">
          Anything Space NASA or fun,  Pirates , Castles , Lord of the Rings , Technic cars or
          just generic bricks and plates sets or Batman / any super heros.
        </li>
        <li class="big">Can not go wrong with lego!</li>
        <li>&nbsp;</li>
        <li> ** Item number opens link to lego store page **</li>
        <li>&nbsp;</li>
        <li>
          {" "}
          Star Wars Mos Eisley Cantina{" "}
          <a
            href="https://www.lego.com/en-us/product/mos-eisley-cantina-75290"
            target="_blank"
            rel="noopener noreferrer"
          >
            # 75290 **
          </a>{" "}
          <li>
            <img
              class="pic"
              alt="lego set"
              src="https://img.bricklink.com/ItemImage/SN/0/75290-1.png"
            />
          </li>
        </li>
        <li>
          {" "}
          Star Wars Droid Commander{" "}
          <a
            href="https://www.lego.com/en-us/product/droid-commander-75253"
            target="_blank"
            rel="noopener noreferrer"
          >
            # 75253 **
          </a>{" "}
        </li>
        <li>
          {" "}
          <img
            class="pic"
            alt="lego set"
            src="https://img.bricklink.com/ItemImage/SN/0/75253-1.png"
          />
        </li>
        <li>
          {" "}
          Scooby Doo Mystery Machine{" "}
          <a
            href="https://www.lego.com/en-gb/product/the-mystery-machine-75902"
            target="_blank"
            rel="noopener noreferrer"
          >
            # 75902 **
          </a>{" "}
        </li>
        <li>
          {" "}
          <img
            class="pic"
            alt="lego set"
            src="https://img.bricklink.com/ItemImage/SN/0/75902-1.png"
          />
        </li>
        <li>
          {" "}
          Stranger Things Upside Down{" "}
          <a
            href="https://www.lego.com/en-gb/product/the-upside-down-75810"
            target="_blank"
            rel="noopener noreferrer"
          >
            # 75810 **
          </a>{" "}
        </li>
        <li>
          <img
            class="pic"
            alt="lego set"
            src="https://img.bricklink.com/ItemImage/SN/0/75810-1.png"
          />{" "}
        </li>
      </ul>
      <h2>Other cool things: Any Star Trek / Space / Paris decorations or knick knacks.</h2>
    </div>
  );
}

export default App;
