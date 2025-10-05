// src/data/carsData.js
import HC1 from "../assets/HC1.png";
import HC2 from "../assets/HC2.png";
import HC3 from "../assets/HC3.png";
import HC4 from "../assets/HC4.png";
import HC5 from "../assets/HC5.png";
import HC6 from "../assets/HC6.png";
import gp5 from "../assets/gp5 ep.jpg";
import corella from "../assets/corella.jpg";
import gp5s from "../assets/gp5s.jpg";
import vezal from "../assets/vezal.jpg";
import stingray from "../assets/stingray.jpg";
import aqua from "../assets/aqua.jpg";
import redVezel from "../assets/redVezel.jpg";



const carsData = [
  {
    id: 1,
    name: "Honda Fit Gp5",
    type: "Compact Sedan",
    price: 3000,
    image: gp5 ,
    description: "Reliable, fuel-efficient commuter.",
    seats: 5,
    fuel: "Gasoline",
    mileage: "30 MPG",
    transmission: "Automatic"
  },
  {
    id: 2,
    name: "Honda Vezel RS",
    type: "Compact Sedan",
    price: 2500,
    image: vezal,
    description: "Sporty handling with modern tech.",
    seats: 5,
    fuel: "Gasoline",
    mileage: "32 MPG",
    transmission: "Automatic"
  },
  {
    id: 3,
    name: "Honda Fit Gp5",
    type: "Hatchback",
    price: 5000,
    image: gp5s,
    description: "Practical hatch with punchy engine.",
    seats: 5,
    fuel: "Gasoline",
    mileage: "29 MPG",
    transmission: "Manual"
  },
  {
    id: 4,
    name: "Honda Vezel RS",
    type: "Compact Sedan",
    price: 2000,
    image: redVezel,
    description: "Smooth ride, lots of tech features.",
    seats: 5,
    fuel: "Gasoline",
    mileage: "33 MPG",
    transmission: "Automatic"
  },
  {
    id: 5,
    name: "Toyota Corella",
    type: "Midsize Sedan",
    price: 7000,
    image: corella,
    description: "Comfortable and spacious daily driver.",
    seats: 5,
    fuel: "Gasoline",
    mileage: "31 MPG",
    transmission: "Automatic"
  },
  {
    id: 6,
    name: "Toyota Aqua",
    type: "Compact Sedan",
    price: 10000,
    image: aqua,
    description: "Efficient cruiser with solid handling.",
    seats: 5,
    fuel: "Diesel",
    mileage: "34 MPG",
    transmission: "Manual"
  }
];

export default carsData;