import { ListResponseModel, ParamsModel } from "./list.model"

export namespace CharacterProps {
  export type Model = {
    id: number
    name: string
    status: string
    species: string
    type: string,
    gender: string
    origin: CharacterProps.Location
    location: CharacterProps.Location
    image: string
    episode: string[]
    url: string
    created: string
  }

  export type Location = {
    name: string,
    url: string
  }
}

export type CharacterResponseModel = {
  info: ListResponseModel
  results: CharacterProps.Model[]
}

export interface Character {
  load: (params:ParamsModel) => Promise<CharacterResponseModel>
  loadById: (id:number) => Promise<CharacterProps.Model>
}