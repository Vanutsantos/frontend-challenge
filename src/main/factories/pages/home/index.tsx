import React, { useEffect, useState } from 'react'
import { CharacterProps, CharacterResponseModel } from '../../../../models/character.model'
import { ListResponseModel, ParamsModel } from '../../../../models/list.model'
import Home from '../../../../presentation/pages/Home'
import { makeCharacter } from '../../usecases/remote-character-factory'

const MakeHome = ():JSX.Element => {
  const [data, setData] = useState<CharacterProps.Model[]|null>(null)
  const [page, setPage] = useState<number>(1)
  const [info, setInfo] = useState<ListResponseModel|null>(null)

  const getCharacters = async (params:ParamsModel):Promise<void> => {
    try {
      const response:CharacterResponseModel = await makeCharacter().load(params)
      setInfo(response.info)
      setData(response.results)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    getCharacters({page})
  },[page])

  return (
    <Home
      data={data}
      info={info}
      setPage={setPage}
    />
  )
}

export default MakeHome
