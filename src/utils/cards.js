import fonts from './fonts';
import arrayShuffle from 'array-shuffle';
const cards_total = 20;

const getCards =() =>{

let cards =[];

while(cards.length < cards_total){
    const index= Math.floor(Math.random() * fonts.length );
     const card = {
        icon: fonts[index],
        correct: false
}
cards.push(card)
cards.push({...card})
}

return arrayShuffle(cards);

}

export default getCards;