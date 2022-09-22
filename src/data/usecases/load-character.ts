import { Character, CharacterProps, CharacterResponseModel } from "../../models/character.model"
import { ParamsModel } from "../../models/list.model"
import { HttpClient, HttpStatusCode } from "../http-clients"


export class RemoteCharacter implements Character {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient,
  ) { }

  async load(params:ParamsModel): Promise<CharacterResponseModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.notFound: throw console.error('Route not found')
      case HttpStatusCode.serverError: throw console.error('Server error')
      default: throw alert('Unexpected error')
    }
  }

  async loadById(id:number): Promise<CharacterProps.Model> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${id}`,
      method: 'get',
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.notFound: throw console.error('Route not found')
      case HttpStatusCode.serverError: throw console.error('Server error')
      default: throw alert('Unexpected error')
    }
  }
}
