import { HttpClient } from '../http/httpClient';
import { Advertisement } from '../types';

abstract class AdsServiceInterface {
  protected httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  abstract get(): Promise<Advertisement>;
}

export class AdsService extends AdsServiceInterface {
  async get() {
    const {
      data: { ads },
    } = await this.httpClient.fetch('/ads.json');

    return ads;
  }
}
