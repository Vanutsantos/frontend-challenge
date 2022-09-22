import React from 'react'
import * as S from './styles'

const Loading = ():JSX.Element => (
  <S.Wrapper>
    <S.Pulse />
    <S.Pulse />
  </S.Wrapper>
)

export default Loading
