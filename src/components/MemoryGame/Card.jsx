import React, { Component } from 'react';
import logo from '../../logo.svg';
import {style} from '../style/style.js'


class Card extends Component {

            handleClick= (e)=> {
                e.preventDefault();
                this.props.selecting(this.props.card);


            };        

    render() {
const {card, working } = this.props;
const showCard = card.correct ||  working; 


        return (
            <div>

{showCard ? 
<div className='' onClick={this.handleClick} style={style.backCard}>
< i className={`fa ${card.icon}`} style={style.logo}></i>
</div> 
:
<div className='' onClick={this.handleClick} style={style.frontCard}>
<img src={logo} style={style.logo} alt="logo" />
</div>
}



            </div>
        );
    }
}

export default Card;