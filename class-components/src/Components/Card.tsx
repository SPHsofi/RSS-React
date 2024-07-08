import React from 'react';
import { Animal } from '../API/api.tsx';

interface CardProps {
  animals: Animal[];
}

interface CardState {}

class Card extends React.Component<CardProps, CardState> {
  render() {
    return (
      <div>
        {this.props.animals.map((animal, ind) => (
          <div key={ind}>
            <p>Uid: {animal.uid}</p>
            <p>Name: {animal.name}</p>
            <p>Earth Animal: {animal.earthAnimal}</p>
            <p>Earth Insect: {animal.earthInsect}</p>
            <p>Feline: {animal.feline}</p>
            <p>Avainr: {animal.avian}</p>
            <p>Canie: {animal.canine}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
