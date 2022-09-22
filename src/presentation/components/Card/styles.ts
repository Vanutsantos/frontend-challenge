import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardStyled = styled(Link)`
  background: #fff;
  overflow: hidden;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
  display: flex;
  flex-direction: column;
  padding: 20px 25px 10px;
  text-decoration: none;
  color: #333;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 20%);
  }
`

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
`

export const CardText = styled.span`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`