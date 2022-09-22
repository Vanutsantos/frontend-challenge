export type ListResponseModel = {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export type ParamsModel = {
  page: number
}