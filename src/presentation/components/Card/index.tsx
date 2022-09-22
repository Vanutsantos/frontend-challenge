import React from 'react'
import { CharacterProps } from '../../../models/character.model';
import * as S from './styles'

type CardProps = {
  content: CharacterProps.Model;
};

const Card = ({content}:CardProps):JSX.Element => (
  <S.CardStyled to={`/personagem/${content.id}`}>
    <S.CardText>{content.name}</S.CardText>
    <S.Image src={content.image} />
    <S.CardFooter>
      <S.CardText># {content.id}</S.CardText>
      <S.CardText>{content.species}</S.CardText>
    </S.CardFooter>
  </S.CardStyled>
)

export default Card
