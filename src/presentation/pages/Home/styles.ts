import styled  from "styled-components";
import ReactPaginate from 'react-paginate'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const CustomPagination = styled(ReactPaginate)`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 30px 0 15px;

  li {
    margin: 0 5px;

    &.next,
    &.previous {
      display: none;
    }

    &:not(.break){
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        cursor: pointer;
        font-weight: bold;
        font-size: 12px;
        padding-top: 1px;
        background: #fff;
        color: #ff9800;
        border: 2px solid #ff9800;
      }
    }

    &.selected {
      a {
        background: #ff9800;
        color: #fff;
        border: none;
      }
    }
  }
`