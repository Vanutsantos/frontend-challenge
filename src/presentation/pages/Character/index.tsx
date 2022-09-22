import React from 'react'
import { CharacterProps } from '../../../models/character.model'
import Container from '../../components/Container'
import Loading from '../../components/Loading'
import Title from '../../components/Title'
import * as S from './styles'

type CharacterPageProps = {
  data: CharacterProps.Model|null
}

const CharacterPage = ({ data }:CharacterPageProps):JSX.Element => (
  <Container>
    <Title text='Personagem' goBack />

    {data == null 
      ? <Loading />
      : <S.Wrapper>
          <S.Image src={data.image} alt={data.name} />

          <S.Content>
            <S.InfoLine>ID: <strong>{data.id}</strong></S.InfoLine>
            <S.InfoLine>Name: <strong>{data.name}</strong></S.InfoLine>
            <S.InfoLine>Gender: <strong>{data.gender}</strong></S.InfoLine>
            <S.InfoLine>Status: <strong>{data.status}</strong></S.InfoLine>
            <S.InfoLine>Specie: <strong>{data.species}</strong></S.InfoLine>
            <S.InfoLine>Origin: <strong>{data.origin.name || 'unknown'}</strong></S.InfoLine>
            <S.InfoLine>Location: <strong>{data.location.name || 'unknown'}</strong></S.InfoLine>
            <S.InfoLine>Created: <strong>{data.created}</strong></S.InfoLine>
          </S.Content>
        </S.Wrapper>
    }
  </Container>
)

export default CharacterPage
