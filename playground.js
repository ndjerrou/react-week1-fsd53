// Destructuring - ES6

const frenchTeam = {
  players: 23,
  footballers: ['Giroud', 'Grizemann', 'N"golo Kante'],
  isFrance: true,
  destination: 'Germany',
  euro: {
    qualified: 15,
    address: {
      city: 'Berlin',
      street: 'Ich bin Berliner',
      num: 6,
    },
  },
};

// const destination = frenchTeam.destination;
// const isFrance = frenchTeam.isFrance;
// const players = frenchTeam.players;

const { destination, isFrance, players } = frenchTeam;

console.log(destination);
console.log(players);
console.log(isFrance);

// destructuring a prop that does not exist ==> undefined
const { price } = frenchTeam;
console.log(price);

// renaming a destructured property
const { destination: dest, isFrance: isFr, players: playersName } = frenchTeam;

console.log(dest);
console.log(isFr);
console.log(playersName);

// destructuring in embedded objects
const {
  euro: {
    address: { num },
  },
} = frenchTeam;

console.log(num);

// destructuring in embedded objects : renaming !
const {
  euro: {
    address: { num: streetNumber },
  },
} = frenchTeam;

console.log(streetNumber);

const {
  euro,
  euro: { address },
} = frenchTeam;

console.log(euro);
console.log(address);
