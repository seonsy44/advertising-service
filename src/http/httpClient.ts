import axios, { AxiosResponse } from 'axios';

abstract class HttpClientInterface {
  protected baseURL;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  abstract fetch(endPoint: string, options?: { [key: string]: any }): Promise<AxiosResponse<any, any>>;
}

export class HttpClient extends HttpClientInterface {
  fetch(endPoint: string, options = {}) {
    return axios(this.baseURL + endPoint, {
      ...options,
    });
  }
}
