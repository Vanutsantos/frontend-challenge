import axios from 'axios'
import { HttpRequest, HttpResponse } from '../data/http-clients'

export class AxiosHttpClient {
  api: any

  constructor(private readonly baseUrl: string | undefined) {
    const api = axios
    api.interceptors.response.use(this.handleSuccess, this.handleError)
    this.api = api
  }

  async request({
    headers, method, url, data, params, ...options
  }: HttpRequest): Promise<HttpResponse> {
    let axiosResponse

    try {
      axiosResponse = await this.api.request({
        url: this.baseUrl + url,
        method,
        data,
        headers: {
          ...headers,
        },
        params,
        ...options,
      })
    } catch (error: any) {
      axiosResponse = error.response
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    }
  }

  handleSuccess = (response: any): object => response

  handleError = (error: { response: { status: any } }): Promise<object> => {
    const { status } = error.response
    switch (status) {
      case 404:
        this.redirectTo(document, '/404')
        break
      default:
        this.redirectTo(document, '/500')
    }
    return Promise.reject(error)
  }

  redirectTo = (document: { location: object }, path: any): void => {
    document.location = path
  }
}
