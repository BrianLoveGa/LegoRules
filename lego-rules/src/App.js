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
      <h1 className="middle">Lego!</h1>
      <h2>
        What do Brad Pitt, Terry Crews, Britney Spears, Matthew Perry, Anna
        Kendrick and myself have in common?
      </h2>

      <img
        className="minifig"
        src="https://cdn.rebrickable.com/media/avatar/brianLoveless/resized/150/legome2.jpeg"
        alt="me as a custom Lego minifig"
      />
      <div></div>
      <h2>We all are AFOL's ! (adult fans of Lego)</h2>
      <div className="space"></div>

      <a
        className="yellow"
        href="https://rebrickable.com/users/brianLoveless/profile/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        rebrickable profile link here
      </a>

      {/* <div className="gallery">
        <div className="areaspin">
          <span className="--i: 1">
            <img
              className="spin"
              src="https://i.imgur.com/c2Vom1j.jpeg"
              alt="ninjago lego set"
            />
          </span>
          <span className="--i: 2">
            <img
              className="spin"
              src="https://i.imgur.com/EhTa5kG.jpeg"
              alt="Paris lego set"
            />
          </span>
          <span className="--i: 3">
            <img
              className="spin"
              src="https://i.imgur.com/4CL70Uf.jpeg"
              alt="mini figures lego set"
            />
          </span>
          <span className="--i: 4">
            <img
              className="spin"
              src="https://i.imgur.com/bddc5GW.jpeg"
              alt="Yoda lego set"
            />
          </span>
          <span className="--i: 5">
            <img
              className="spin"
              src="https://i.imgur.com/7Bk8DNk.jpeg"
              alt="pirate ship lego set"
            />
          </span>
          <span className="--i: 6">
            <img
              className="spin"
              src="https://i.imgur.com/Dv0jnfc.jpeg"
              alt="pirate lego set"
            />
          </span>
          <span className="--i: 7">
            <img
              className="spin"
              src="https://i.imgur.com/8wBPl9m.jpeg"
              alt="lego set"
            />
          </span>
          <span className="--i: 8">
            <img
              className="spin"
              src="https://i.imgur.com/z6HAd3C.jpeg"
              alt="lego set"
            />
          </span>
        </div>{" "}
      </div> */}

      <div className="owned">
        <h2 className="owned">Begin Owned Sets:</h2>
        <ul className="owned">
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
          <li> The Keepers' Village # 71747</li>
          <li>
            <Zoom>
              <img
                class="pic"
                alt="ninjago lego set"
                src="https://cdn.rebrickable.com/media/thumbs/sets/71747-1/81641.jpg/1000x800p.jpg?1612210687.7408125"
              />
            </Zoom>
          </li>{" "}
          <li>Hagrid's Hut: Buckbeak's Rescue #75947</li>
          <li>
            <Zoom>
              <img
                class="pic"
                src="https://cdn.rebrickable.com/media/thumbs/sets/75947-1/21504.jpg/1000x800p.jpg?1610478314.854744"
                alt="Harry Potter Lego set"
              />
            </Zoom>
          </li>
          <li>Pirates of Barracuda Bay # 21322</li>
          <li>
            <Zoom>
              <img
                class="pic"
                src="https://cdn.rebrickable.com/media/thumbs/sets/21322-1/56307.jpg/1000x800p.jpg?1617372605.627302"
                alt="Pirates Lego"
              />
            </Zoom>
          </li>
          <li>Chocolate Box and Flower # 30411</li>
          <li>
            <Zoom>
              <img
                class="pic"
                src="https://cdn.rebrickable.com/media/thumbs/sets/30411-1/56386.jpg/1000x800p.jpg?1617386375.9754918"
                alt="Valentines Lego candy box and rose"
              />
            </Zoom>
          </li>
          <li>Lucky Cat # 40436</li>
          <li>have 2 of these ... just not at my house</li>
          <li>
            <Zoom>
              <img
                class="pic"
                src="https://cdn.rebrickable.com/media/thumbs/sets/40436-1/18699.jpg/1000x800p.jpg?1610526072.177875"
                alt="little cat lego figurine"
              />
            </Zoom>
          </li>
          <li>New Year of the ox # 40417</li>
          <li>
            <Zoom>
              <img
                class="pic"
                src="https://cdn.rebrickable.com/media/thumbs/sets/40417-1/79789.jpg/1000x800p.jpg?1610954910.5861714"
                alt="little oxen lego figure"
              />
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
          <li>Camaro Race Car # 75891</li>
          <li>
            <Zoom>
              <img
                class="pic"
                alt="lego set"
                src="https://cdn.rebrickable.com/media/thumbs/sets/75891-1/21800.jpg/1000x800p.jpg?1610463319.384234"
              />
            </Zoom>
          </li>
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
        <h2 className="owned">END Owned Sets</h2>
      </div>
      <div className="space"></div>
      <h2>Click the link below to see some of my builds on my Imgur account</h2>
      <div className="space"></div>
      <a
        className="yellow"
        href="https://imgur.com/user/brianloveless321bl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lego builds on my IMGUR
      </a>

      <div className="wish">
        <h2 className="want">Wish-list:</h2>
        <ul className="want">
          <li className="big want">
            Anything NASA, Pirates, Castles, Lord of the Rings, Technic sets,
            Cars or just generic bricks and plates sets or Batman / any
            superheroes.
          </li>
          <li className="big want">
            You can not go wrong with any Lego for me!
          </li>
          <li className="want">&nbsp;</li>
          <li className="want">
            {" "}
            ** Item number opens link to Lego store page **
          </li>
          <li className="want">&nbsp;</li>
          <li className="want">
            {" "}
            International Space Station{" "}
            <a
              href="https://www.lego.com/en-us/product/international-space-station-21321"
              target="_blank"
              rel="noopener noreferrer"
              className="want pic"
            >
              {" "}
              # 21321 **
            </a>
          </li>
          <li className="want">
            <Zoom>
              <img
                alt="lego set"
                className="want pic"
                src="https://cdn.rebrickable.com/media/thumbs/sets/21321-1/52139.jpg/1000x800p.jpg?1603031651.6852999"
              />
            </Zoom>
          </li>

          <li className="want">
            Sesame Street{" "}
            <a
              href="https://www.lego.com/en-us/product/123-sesame-street-21324"
              target="_blank"
              rel="noopener noreferrer"
              className="want"
            >
              # 21324 **
            </a>
          </li>
          <li className="want">
            <Zoom>
              <img
                alt="lego set"
                src="https://cdn.rebrickable.com/media/thumbs/sets/21324-1/74644.jpg/1000x800p.jpg?1603374934.745329"
                className="want pic"
              />
            </Zoom>
          </li>
          <li className="want">
            {" "}
            Star Wars Droid Commander{" "}
            <a
              href="https://www.lego.com/en-us/product/droid-commander-75253"
              target="_blank"
              rel="noopener noreferrer"
              className="want pic"
            >
              # 75253 **
            </a>{" "}
          </li>
          <li className="want">
            {" "}
            <Zoom>
              <img
                alt="lego set"
                src="https://img.bricklink.com/ItemImage/SN/0/75253-1.png"
                className="want pic"
              />
            </Zoom>
          </li>
          <li className="want"></li>
          <li className="want">
            {" "}
            Scooby Doo Mystery Machine{" "}
            <a
              href="https://www.lego.com/en-gb/product/the-mystery-machine-75902"
              target="_blank"
              rel="noopener noreferrer"
              className="want"
            >
              # 75902 **
            </a>{" "}
          </li>
          <li className="want">
            {" "}
            <Zoom>
              <img
                alt="lego set"
                src="https://img.bricklink.com/ItemImage/SN/0/75902-1.png"
                className="want pic"
              />
            </Zoom>
          </li>
          <li className="want">
            {" "}
            Stranger Things Upside Down{" "}
            <a
              href="https://www.lego.com/en-gb/product/the-upside-down-75810"
              target="_blank"
              rel="noopener noreferrer"
              className="want"
            >
              # 75810 **
            </a>{" "}
          </li>
          <li className="want">
            <Zoom>
              <img
                alt="lego set"
                src="https://img.bricklink.com/ItemImage/SN/0/75810-1.png"
                className="want pic"
              />{" "}
            </Zoom>
          </li>
          <li className="want">
            {" "}
            Star Wars Mos Eisley Cantina{" "}
            <a
              href="https://www.lego.com/en-us/product/mos-eisley-cantina-75290"
              target="_blank"
              rel="noopener noreferrer"
              className="want"
            >
              # 75290 **
            </a>{" "}
          </li>
          <li className="want">
            <Zoom>
              <img
                class="pic"
                alt="lego set"
                src="https://img.bricklink.com/ItemImage/SN/0/75290-1.png"
              />
            </Zoom>
          </li>
        </ul>
      </div>
      <div className="space"></div>
      <h2>
        Other cool things: Any Star Trek / Space / Paris decorations or knick
        knacks. Stuff from Archer, Disenchantment, Simpsons, Rick and Morty,
        Futurama or, general nerdy stuff.
      </h2>
    </div>
  );
}

export default App;
