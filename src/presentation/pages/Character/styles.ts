import styled  from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
  padding: 20px;
`

export const Content = styled.div`
  padding: 0 15px;
  width: 100%;
  width: 70%;

  h3 {
    border-bottom: 1px solid #333;
    margin-bottom: 10px;
  }
`

export const Image = styled.img`
  aspect-ratio: 1;
  width: 30%;
  object-fit: cover;
`

export const InfoLine = styled.span`
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
  border-bottom: 1px solid #e1e1e1;
  padding: 5px 0;
`
