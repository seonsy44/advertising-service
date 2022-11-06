import { MS_PER_DAY } from './conts';

export const parseDate = (startDate: string, endDate: string | null = '') => {
  if (!endDate) return startDate.slice(0, 10);
  return `${startDate.slice(0, 10)} (${endDate.slice(0, 10)})`;
};

export const parseKRW = (cost: number) => `${Math.round(cost / 10000).toLocaleString()}만 원`;

export const parseString = (num: number) => {
  if (num >= 10000) return `${Math.round(num / 10000).toLocaleString()}만`;
  return Math.round(num).toLocaleString();
};

export const getFluctucation = (prev: number, cur: number) => parseString(Math.abs(Math.round(cur - prev)));

export const getPeriod = (fromDate: Date, toDate: Date) =>
  Math.abs((fromDate.getTime() - toDate.getTime()) / MS_PER_DAY) + 1;
