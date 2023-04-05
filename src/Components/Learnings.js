// first importing useState
import { useState } from "react";

const universeObjects = {
  Galaxies: [
    'The word "galaxy" which refers to our galaxy, the Milky Way, is derived from the Greek word "galaxias", which means "milky".',
    "They alter the way spiral arms form.",
    "Galaxies have their magnetic fields.",
    "There are three primary types of galaxies in space: elliptical, spiral, and irregular.",
    "Groups of stars and other matter are present in every galaxy and are bound together by gravity.",
  ],

  Stars: [
    "Stars have atmospheres, just like planets. Our Sun’s atmosphere extends the boundaries of the outer Solar System.",
    "Stars of our Galaxy orbit around a supermassive black hole at its center just as planets orbit those stars.",
    "There are about as many binary systems in the observable part of the Universe as there are single-star systems.",
    "The average density of a neutron star is approximately equal to the density of the atomic nucleus.",
    "The most promising candidates for searching for extraterrestrial life are yellow dwarfs similar to our Sun.",
  ],

  BlackHoles: [
    "You Can’t Directly See a Black Hole.",
    "Our Milky Way Probably Has a Black Hole.",
    "Dying Stars Lead to Stellar Black Holes.",
    "Black Holes Are Only Dangerous if You Get Too Close.",
  ],

  Planets: [
    "Earth’s atmosphere protects us from meteoroids and radiation from the Sun.",
    "Venus is the hottest planet in the solar system.",
    "Mercury’s craters are named after famous artists, musicians and authors.",
    "Saturn has more moons than any other planet in the Solar System.",
    "There have been more missions to Mars than any other planet.",
  ],

  Asteroids: [
    "Asteroids are rich in minerals and water",
    "Some asteroids became the moons of planets",
    "There are millions of asteroids in the solar system",
    "Asteroids can have moons, rings and tails",
    "Asteroids are relics from the time the solar system was born",
  ],
};

function Learnings(props) {
  const [facts, setFacts] = useState([]);

  let objectTypeMouseOverHandler = (item) => {
    let factList = universeObjects[item];
    setFacts(factList);
  };

  function getFacts(item, index) {
    if (index % 2 === 0)
      return (
        <li className="list-item-facts back-white" key={item}>
          {item}
        </li>
      );
    return (
      <li className="list-item-facts" key={item}>
        {item}
      </li>
    );
  }
  return (
    <div className="div-learning">
      <h1>Hi,Here you can explore the universe 🌌</h1>
      <p className="para-message">
        tap in any of the following objects and you get some facts about that.
      </p>
      <div className="universe-objects-container">
        {Object.keys(universeObjects).map((item, index) => {
          return (
            <span
              className="spn-univ-object"
              onMouseOver={() => objectTypeMouseOverHandler(item)}
              key={item}
            >
              {item}
            </span>
          );
        })}
      </div>
      <div className="div-result">
        <ul className="list-facts">
          {facts.map((item, index) => getFacts(item, index))}
        </ul>
      </div>
    </div>
  );
}

export default Learnings;
