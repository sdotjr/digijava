import getCard from "./card.js";

class Deck
{
  constructor(area = 'Main') {
    this.cards = [];
    this.area = area
    this.digieggDeck = new Deck('Digi-Egg')
    
  }

  addCard(card) {


  }

  shuffle() {
    this.cards.sort(() => .5 - Math.random())
  }
}





function freshDeck() {

}

var c = new getCard('BT1-040')

console.log(c);