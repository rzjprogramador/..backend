
export interface HttpResponse<T = any> {
  statusCode: number
  data: T
}

export interface HttpRequest {
  data?: any
}