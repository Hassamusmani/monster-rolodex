import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

class CardList extends React.Component {
constructor() {
  super();
  this.state = {};
}

render() {
  return(
    <div className='card-list'>{this.props.monsters.map((m) => <Card key={m.id} monster={m} />) }</div>
  );
}

}

export default CardList;