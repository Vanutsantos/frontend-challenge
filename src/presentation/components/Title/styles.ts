import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin: 30px 0 30px 10px!important;
  }

  button {
    height: 17px;
    width: 17px;
    border: 4px solid transparent;
    border-left-color: #ff9800;
    border-bottom-color: #ff9800;
    transform: rotate(45deg);
    cursor: pointer;
    background: none;
  }
`

export const GoBackButton = styled(Link)`
  height: 16px;
  width: 16px;
  border: 4px solid transparent;
  border-left-color: #ff9800;
  border-bottom-color: #ff9800;
  transform: rotate(45deg);
  cursor: pointer;
  background: none;
  text-decoration: none;
`

export const Title = styled.h1`
  font-size: 38px;
  margin: 30px 0;
  text-transform: uppercase;
  color: #ff9800;


  @media (max-width: 992px) {
    text-align: center;
  }
`