// import deps
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-fastclick';

// import components
import Wheel from '../components/Wheel/Wheel.js';

// main app that binds everything together
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      'items':
      {
          "dried_fruit": {
              "title": "Dried Fruit",
              "subtitle": "Primary",
              "color": "#AC92EC",
              "meta": [
                  "Raisin",
                  "Fig",
                  "Date",
                  "Fruitcake"
              ]
          },
          "black_fruit":   {
              "title": "Black Fruit",
              "subtitle": "Primary",
              "color": "#D770AD",
              "meta": [
                  "Boysenberry",
                  "Black Currant",
                  "Black Cherry",
                  "Plum",
                  "Blackberry",
                  "Blueberry",
                  "Olive"
              ]
          },
          "red_fruit": {
              "title": "Red Fruit",
              "subtitle": "Primary",
              "color": "#EC87C0",
              "meta": [
                  "Cranberry",
                  "Red Plum",
                  "Pomegranate",
                  "Sour Cherry",
                  "Strawberry",
                  "Cherry",
                  "Raspberry",
                  "Red Currant"
              ]
          },
          "tropical_fruit": {
              "title": "Tropical Fruit",
              "subtitle": "Primary",
              "color": "#C11B38",
              "meta": [
                  "Pineapple",
                  "Mango",
                  "Guava",
                  "Kiwi",
                  "Lychee",
                  "Bubblegum",
                  "Melon",
                  "Passion Fruit",
                  "Lychee",
                  "Melon",
                  "Passion Fruit"
              ]
          },
          "tree_fruit": {
              "title": "Tree Fruit",
              "subtitle": "Primary",
              "color": "#DA4453",
              "meta": [
                  "Quince",
                  "Apple",
                  "Pear",
                  "Nectarine",
                  "Peach",
                  "Apricot",
                  "Persimmon",
                  "Green Apple"
              ]
          },
          "citrus": {
              "title": "Citrus",
              "subtitle": "Primary",
              "color": "#ED5565",
              "meta": [
                  "Lime",
                  "Lemon",
                  "Grapefruit",
                  "Orange",
                  "Marmalade",
                  "Mandarine"
              ]
          },
          "flower": {
              "title": "Flower",
              "subtitle": "Primary",
              "color": "#E9573F",
              "meta": [
                  "Iris",
                  "Peony",
                  "Elderflower",
                  "Acacia",
                  "Lilac",
                  "Jasmine",
                  "Honeysuckle",
                  "Violet",
                  "Lavender",
                  "Rose",
                  "Potpourri",
                  "Hibiscus",
                  "Hawthorn",
                  "Orange blossom",
                  "linden"
              ]
          },
          "volatile_acidity": {
              "title": "Volatile Acidity",
              "subtitle": "Faults",
              "color": "#FC6E51",
              "meta": [
                  "Balsamic",
                  "Vinegar"
              ]
          },
          "cooked_fruit": {
              "title": "Cooked Fruit",
              "subtitle": "Faults",
              "color": "#F6BB42",
              "meta": [
                  "Stewed Fruit",
                  "Toffee"
              ]
          },
          "brettanomyces": {
              "title": "Brettanomyces",
              "subtitle": "Faults",
              "color": "#FFCE54",
              "meta": [
                  "Horse Manure",
                  "Sweaty Leather Saddle",
                  "Band-Aid",
                  "Black Cardamon"
              ]
          },
          "sulfides_mercaptans": {
              "title": "Sulfides",
              "subtitle": "Faults",
              "color": "#8CC152",
              "meta": [
                  "Cat Pee",
                  "Onion",
                  "Garlic",
                  "Match Box",
                  "Burnt Rubber",
                  "Boiled Eggs",
                  "Cured Meat"
              ]
          },
          "tca_corked": {
              "title": "TCA (corked)",
              "subtitle": "Faults",
              "color": "#A0D468",
              "meta": [
                  "Wet Dog",
                  "Musty Cardboard"
              ]
          },
          "general_aging": {
              "title": "General Aging",
              "subtitle": "Tertiary",
              "color": "#37BC9B",
              "meta": [
                  "Leather",
                  "Cocoa",
                  "Coffee",
                  "Tobacco",
                  "Hay",
                  "Nuts",
                  "Dried Fruit"

              ]
          },
          "oak_aging": {
              "title": "Oak Aging",
              "subtitle": "Tertiary",
              "color": "#48CFAD",
              "meta": [
                  "Dill",
                  "Smoke",
                  "Cigar Box",
                  "Baking Spices",
                  "Coconut",
                  "Vanilla",
                  "Toast"
              ]
          },
          "microbial": {
              "title": "Microbial",
              "subtitle": "Secondary",
              "color": "#3BAFDA",
              "meta": [
                  "Mushroom",
                  "Truffle",
                  "Tree Moss",
                  "Lager",
                  "Sourdough",
                  "Cream",
                  "Butter",
                  "Yoghurt"
              ]
          },
          "earth":  {
              "title": "Earth",
              "subtitle": "Primary",
              "color": "#4FC1E9",
              "meta": [
                  "Petroleum",
                  "Volcanic Rocks",
                  "Red Beet",
                  "Potting Soil",
                  "Wet Gravel",
                  "Slate",
                  "Clay Pot"
              ]
          },
          "vegetable": {
              "title": "Vegetable",
              "subtitle": "Primary",
              "color": "#4A89DC",
              "meta": [
                  "Black Tea",
                  "Sun Dried Tomato",
                  "Tomato",
                  "Bitter Almond",
                  "Jalapeno",
                  "Green Pepper",
                  "Bell Pepper",
                  "Gooseberry",
                  "Tout Leaf",
                  "Grass"
              ]
          },
          "spice": {
              "title": "Spice",
              "subtitle": "Primary",
              "color": "#5D9CEC",
              "meta": [
                  "Thyme",
                  "Mint",
                  "Eucalyptus",
                  "Fennel",
                  "5-Spice",
                  "Anise",
                  "Cinnamon",
                  "Black Pepper",
                  "Red Pepper",
                  "White Pepper",
                  "Dill",
                  "Clove",
                  "Nutmeg",
                  "Licorice",
                  "Vanilla"
              ]
          },
          "noble_rot": {
              "title": "Noble Rot",
              "subtitle": "Primary",
              "color": "#967ADC",
              "meta": [
                  "Beeswax",
                  "Ginger",
                  "Honey"
              ]
          }
      }
    };
  }

  _setState(obj) {
    this.setState(obj);
  }

  render() {
    return (
      <div class="app">
        <Wheel items={this.state.items}/>
      </div>
    );
  }
}

// Bind main app to DOM
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
