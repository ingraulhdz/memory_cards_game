import React, { Component } from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
import "../../App.js";
import cards from "../../utils/cards";


class index extends Component {
  state = {
    cards: cards(),
    selection: [],
    working: false,
    attemps: 0,
    correct: false,
  };
  //   stopWorking = (card) => {
  //     if (
  //       this.state.working ||
  //       card.correct ||
  //       this.state.selection.indexOf(card) > -1
  //     ) {
  //       return card;
  //     }
  //   };
  selecting = (card) => {
    // this.stopWorking(card);
    // continu working

    if (
      this.state.working ||
      card.correct ||
      this.state.selection.indexOf(card) > -1
    ) {
      return;
    }
    const selection = [...this.state.selection, card];

    this.setState((prevState) => {
      return {
        ...prevState,
        selection: selection,
      };
    });

    if (selection.length === 2) {
      this.comparePair(selection);
    }
  };

  comparePair = (selection) => {
    this.setState((prev) => {
      return {
        ...prev,
        working: true,
      };
    });

    setTimeout(() => {
        const [sel1, sel2 ] = selection;
        let cards = this.state.cards;

            if(sel1.icon === sel2.icon ){
                cards = cards.map( (card) =>
                         {
                            if(card.icon !== sel1.icon){
                                return card;
                            }else {
                                return {...card, correct: true}

                            }

                        })
            }

            this.setState({
                cards: cards,
                selection: [],
                working: false,
                attemps: this.state.attemps + 1 
            })
        
    }, 1000);
  };

  restartGame =() =>{
    this.setState({
        cards: cards(),
    selection: [],
    working: false,
    attemps: 0,
    correct: false,
    })
  }
  render() {
    const { cards, selection, attemps} = this.state;

    return (
      <div>
        <Header attemps={attemps} restartGame={this.restartGame} />
        <Dashboard
          cards={cards}
          selecting={this.selecting}
          selection={selection}
        />
      </div>
    );
  }
}

export default index;
