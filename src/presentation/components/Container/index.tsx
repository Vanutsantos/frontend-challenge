import React from 'react'
import * as S from './styles'

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({children}:ContainerProps):JSX.Element => (
  <S.ContainerStyled>
    {children}
  </S.ContainerStyled>
)

export default Container
