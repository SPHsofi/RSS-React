import React from 'react';
import { Animal } from '../API/api.tsx';
import style from '../Styles/Card.module.css';

interface CardProps {
  animals: Animal[] | string;
}

interface CardState {}

class Card extends React.Component<CardProps, CardState> {
  renderAnimal = (animal: Animal) => {
    const faunaList = [];
    if (animal.earthAnimal) faunaList.push('Earth Animal');
    if (animal.earthInsect) faunaList.push('Earth Insect');
    if (animal.feline) faunaList.push('Feline');
    if (animal.avian) faunaList.push('Avian');
    if (animal.canine) faunaList.push('Canine');

    const faunaString = faunaList.join(', ');

    return (
      <div key={animal.uid} className={style.cardWrap}>
        <p>Uid: {animal.uid}</p>
        <p>Name: {animal.name}</p>
        <p>Fauna: {faunaString ? faunaString : 'No fauna listed'}</p>
      </div>
    );
  };

  render() {
    const { animals }: string = this.props;

    if (Array.isArray(animals)) {
      return <div className={style.wrapper}>{animals.map(this.renderAnimal)}</div>;
    } else {
      return <div className={style.wrapper}>{this.renderAnimal(animals)}</div>;
    }
  }
}

export default Card;
