import React from 'react'
import { CharacterProps } from '../../../models/character.model'
import { ListResponseModel } from '../../../models/list.model'
import Card from '../../components/Card'
import Container from '../../components/Container'
import Loading from '../../components/Loading'
import Title from '../../components/Title'
import * as S from './styles'

type HomeProps = {
  data: CharacterProps.Model[]|null
  info: ListResponseModel|null
  setPage: (page:number) => void
}

const Home = ({data, info, setPage}:HomeProps):JSX.Element => ( 
  <Container>
    <Title text='Personagens' />

    {data === null || info === null
      ? <Loading />
      : <>
          <S.CardContainer>
            {data?.map((item:CharacterProps.Model) => (
              <Card 
                key={item.id}
                content={item}
              />
            ))}     
          </S.CardContainer>

          <S.CustomPagination
            pageCount={info.pages}
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
            onPageChange={({selected}) => {
              setPage(selected + 1)}
            }
          />
        </>
    }
    
    
  </Container>
)

export default Home
