import { HttpClient } from '../http/httpClient';
import { Trend } from '../types';
import { MS_PER_9HOURS } from '../utils/conts';
import { getPeriod } from '../utils/utils';

abstract class TrendServiceInterface {
  protected httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  abstract get(fromDate: Date, toDate: Date): Promise<Trend[]>;
}

export class TrendService extends TrendServiceInterface {
  async get(fromDate: Date, toDate: Date): Promise<Trend[]> {
    const res = await this.httpClient.fetch('/trend.json');

    const data = res.data.report.daily;
    const period = getPeriod(fromDate, toDate);

    const index = data.findIndex(
      ({ date }: { date: string }) => new Date(date).getTime() - MS_PER_9HOURS === fromDate.getTime()
    );

    return data.slice(index, index + period);
  }
}
