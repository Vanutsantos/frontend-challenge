import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CharacterProps } from '../../../../models/character.model'
import Character from '../../../../presentation/pages/Character'
import { makeCharacter } from '../../usecases/remote-character-factory'

const MakeCharacter = ():JSX.Element => {
  const {id} = useParams()
  const [data, setData] = useState<CharacterProps.Model|null>(null)

  const getCharacters = useCallback( async ():Promise<void> => {
    try {
      const response:CharacterProps.Model = await makeCharacter().loadById(Number(id))
      setData(response)
    } catch (error) {
      console.error(error)
    }
  }, [id])

  useEffect(()=>{
    getCharacters()
  },[getCharacters])

  return <Character data={data} />
}

export default MakeCharacter
