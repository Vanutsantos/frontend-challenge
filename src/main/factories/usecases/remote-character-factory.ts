import { RemoteCharacter } from '../../../data/usecases/load-character'
import { Character } from '../../../models/character.model'
import { makeAxiosHttpClient } from '../axios-http-client-factory'

export const makeCharacter = (): Character => new RemoteCharacter('/character', makeAxiosHttpClient())
