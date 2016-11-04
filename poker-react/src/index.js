// DO NOT MODIFY ANYTHING BETWEEN LINES 1-33. NO REALLY.
// React
var React = require('react');
var ReactDOM = require('react-dom');

// shuffles (randomizes an array)
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns a deck of cards
// e.g. getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END OF STUFF TO NOT MODIFY

var Deck = window.getDeck().shuffle()
console.log(Deck[0])

var Cards = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-sm-2">
            <img className="img-responsive" src={"http://golearntocode.com/images/cards/" + Deck[0] + ".png"} />
            <img className="img-responsive" src={"http://golearntocode.com/images/cards/" + Deck[1] + ".png"} />
            <img className="img-responsive" src={"http://golearntocode.com/images/cards/" + Deck[2] + ".png"} />
            <img className="img-responsive" src={"http://golearntocode.com/images/cards/" + Deck[3] + ".png"} />
            <img className="img-responsive" src={"http://golearntocode.com/images/cards/" + Deck[4] + ".png"} />
              </div>
            </div>
    )
  }
});

//Note: I'm having an issue defining and then overwriting initial state
//var deal = React.createClass({
//getInitialState: function() {
//  return {deal: this.props.deal}
//  )
// }
//};

var App = React.createClass( {
    dealClicked: function() {
    var nextDeal = nextDeal
    this.setState(
      {nextDeal}
    )
  },

  render: function() {
    return (
      <div>
        <h1>Welcome to the KIEI-924 Casino!</h1>
            <Cards />
          <div className="col-sm-2">
            <h1><a href="#" className="btn btn-success" onClick={this.dealClicked}>Deal</a></h1>
          </div>
      </div>
    )
  }
})

ReactDOM.render(<App />,
document.getElementById("app"))
