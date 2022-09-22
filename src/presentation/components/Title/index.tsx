import React from 'react'
import * as S from './styles'

type TitleProps = {
  text: string
  goBack?: boolean
};

const Title = ({ text, goBack = false }:TitleProps):JSX.Element => {
  if( goBack ){
    return (
      <S.TitleWrapper>
        <S.GoBackButton to='/' />
        <S.Title>{text}</S.Title>
      </S.TitleWrapper>
    )
  }

  return <S.Title>{text}</S.Title>
}

export default Title
