import React from "react";
import "./App.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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
      <h2>Begin Owned Sets:</h2>
      <ul>
        <li>Millennium Falcon # 75257 </li>
        <li>
          <Zoom>
            <img class="pic" src={mf} alt="Millennium Falcon Lego" />
          </Zoom>
        </li>
        <li>Paris # 21044</li>
        <li>
          <Zoom>
            <img class="pic" src={p} alt="Paris France Lego" />
          </Zoom>
        </li>
        <li>Duel on Starkiller # 75236</li>
        <li>
          <Zoom>
            <img class="pic" src={DSK} alt="Duel on Starkiller base Lego" />
          </Zoom>
        </li>
        <li> Friends Central Perk # 21319</li>
        <li>
          <Zoom>
            <img
              class="pic"
              alt="lego set"
              src="https://cdn.rebrickable.com/media/thumbs/sets/21319-1/22594.jpg/1000x800p.jpg?1610460912.7901213"
            />
          </Zoom>
        </li>
        <li> Death Star Cannon # 75246</li>
        <li>
          <Zoom>
            <img
              class="pic"
              alt="lego set"
              src="https://cdn.rebrickable.com/media/thumbs/sets/75246-1/19254.jpg/1000x800p.jpg?1610470901.3524528"
            />
          </Zoom>
        </li>
        <li> Duel on Mustafar # 75269</li>
        <li>
          <Zoom>
            <img
              class="pic"
              alt="lego set"
              src="https://cdn.rebrickable.com/media/thumbs/sets/75269-1/17869.jpg/1000x800p.jpg?1610307919.2139838"
            />
          </Zoom>
        </li>{" "}
        <li> Kylo Ren's Micro Shuttle # 75264</li>
        <li>
          <Zoom>
            <img
              class="pic"
              alt="lego set"
              src="https://cdn.rebrickable.com/media/thumbs/sets/75264-1/17840.jpg/1000x800p.jpg?1610294145.079462"
            />
          </Zoom>
        </li>{" "}
        <li> Sith TIE Fighter # 75272</li>
        <li>
          <Zoom>
            <img
              class="pic"
              alt="lego set"
              src="https://cdn.rebrickable.com/media/thumbs/sets/75272-1/17875.jpg/1000x800p.jpg?1610290535.9464145"
            />
          </Zoom>
        </li>{" "}
        <li> Nutcracker # 40254</li>
        <li>
          <Zoom>
            <img
              class="pic"
              alt="lego set"
              src="https://cdn.rebrickable.com/media/thumbs/sets/40254-1/27480.jpg/1000x800p.jpg?1610474353.2461045"
            />
          </Zoom>
        </li>{" "}
        <li> Luke Skywalker's Landspeeder # 75271</li>
        <li>
          <Zoom>
            <img
              class="pic"
              alt="lego set"
              src="https://cdn.rebrickable.com/media/thumbs/sets/75271-1/17650.jpg/1000x800p.jpg?1610294160.4110422"
            />
          </Zoom>
        </li>{" "}
        <li> Obi-Wan's Hut # 75270</li>
        <li>
          <Zoom>
            <img
              class="pic"
              alt="lego set"
              src="https://cdn.rebrickable.com/media/thumbs/sets/75270-1/17644.jpg/1000x800p.jpg?1610289550.382126"
            />
          </Zoom>
        </li>{" "}
        <li> R2-D2 # 8009</li>
        <li>
          <Zoom>
            <img
              class="pic"
              alt="lego set"
              src="https://cdn.rebrickable.com/media/thumbs/sets/8009-1/2581.jpg/1000x800p.jpg?1606988434.1829367"
            />
          </Zoom>
        </li>{" "}
        <li> Resistance A-Wing Starfighter # 75248</li>
        <li>
          <Zoom>
            <img
              class="pic"
              alt="lego set"
              src="https://cdn.rebrickable.com/media/thumbs/sets/75248-1/19245.jpg/1000x800p.jpg?1610477215.5283575"
            />
          </Zoom>
        </li>{" "}
        <li> Yoda # 75255 </li>
        <li>
          <Zoom>
            <img
              class="pic"
              alt="lego set"
              src="https://cdn.rebrickable.com/media/thumbs/sets/75255-1/19221.jpg/1000x800p.jpg?1610481737.8717103"
            />
          </Zoom>
        </li>{" "}
        <li> Anakin's Podracer - 20th Anniversary Edition # 75258</li>
        <li>
          <Zoom>
            <img
              class="pic"
              alt="lego set"
              src="https://cdn.rebrickable.com/media/thumbs/sets/75258-1/21021.jpg/1000x800p.jpg?1610467523.604839"
            />
          </Zoom>
        </li>
        <li>Joker's Trike # 76159</li>
        <li>
          <Zoom>
            <img class="pic" src={JT} alt="Joker's Trike Lego" />
          </Zoom>
        </li>
        <li>D S II Battle # 40407</li>
        <li>
          <Zoom>
            <img class="pic" src={DSii} alt="Death Star 2 battle Lego" />
          </Zoom>
        </li>
        <li>Ewok Attack # 7956 </li>
        <li>
          <Zoom>
            <img class="pic" src={ewok} alt="Ewok attack Lego" />
          </Zoom>
        </li>
        <li>END of list</li>
      </ul>
      <h2>END Owned Sets</h2>
      <br></br>
      <hr></hr>
      <br></br>
      <hr></hr>
      <h2>Wish-list:</h2>
      <ul>
        <li class="big">
          Anything NASA, Pirates, Castles, Lord of the Rings, Technic cars or
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
            <Zoom>
              <img
                class="pic"
                alt="lego set"
                src="https://img.bricklink.com/ItemImage/SN/0/75290-1.png"
              />
            </Zoom>
          </li>
        </li>
        <li>
          Sesame Street{" "}
          <a
            href="https://www.lego.com/en-us/product/123-sesame-street-21324"
            target="_blank"
            rel="noopener noreferrer"
          >
            # 21324 *?*
          </a>
        </li>
        <li>
          <Zoom>
            <img
              class="pic"
              alt="lego set"
              src="https://nerdist.com/wp-content/uploads/2020/10/Sesame-Street-LEGO-Box.jpg"
            />
          </Zoom>
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
          <Zoom>
            <img
              class="pic"
              alt="lego set"
              src="https://img.bricklink.com/ItemImage/SN/0/75253-1.png"
            />
          </Zoom>
        </li>
        <li></li>
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
          <Zoom>
            <img
              class="pic"
              alt="lego set"
              src="https://img.bricklink.com/ItemImage/SN/0/75902-1.png"
            />
          </Zoom>
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
          <Zoom>
            <img
              class="pic"
              alt="lego set"
              src="https://img.bricklink.com/ItemImage/SN/0/75810-1.png"
            />{" "}
          </Zoom>
        </li>
      </ul>
      <h2>
        Other cool things: Any Star Trek / Space / Paris decorations or knick
        knacks.
      </h2>
    </div>
  );
}

export default App;
