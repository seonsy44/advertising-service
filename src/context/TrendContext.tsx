import React, { useContext, createContext, useEffect, useState, useMemo } from 'react';
import { addDays } from 'date-fns';
import { TrendService } from '../service/TrendService';
import { getFluctucation, getPeriod, parseString } from '../utils/utils';
import { Trend } from '../types';
import { graphOptions } from '../utils/conts';

type TrendProviderProps = {
  children: React.ReactNode;
  trendService: TrendService;
};

type SummaryDataValues = { title: string; content: string; fluctuation: string; isIncreased: boolean };

type State = {
  trends: Trend[];
  summaryData: SummaryDataValues[];
  getTrend: (fromDate: Date, toDate: Date) => void;
  dateRange: {
    fromDate: Date;
    toDate: Date;
  };
  setDateRange: React.Dispatch<
    React.SetStateAction<{
      fromDate: Date;
      toDate: Date;
    }>
  >;
  graphOption: (
    | {
        id: number;
        option?: 'imp' | 'click' | 'cost' | 'conv' | 'convValue' | 'roas';
        content: string;
      }
    | {
        id?: undefined;
        option?: undefined;
        content?: undefined;
      }
  )[];
  setGraphOption: React.Dispatch<
    React.SetStateAction<
      (
        | {
            id: number;
            option?: string;
            content: string;
          }
        | {
            id?: undefined;
            option?: undefined;
            content?: undefined;
          }
      )[]
    >
  >;
};

const TrendContext = createContext<State | null>(null);
export const useTrend = () => useContext(TrendContext);

export function TrendProvider({ children, trendService }: TrendProviderProps) {
  const [dateRange, setDateRange] = useState({ fromDate: new Date(2022, 3, 14), toDate: new Date(2022, 3, 20) });
  const [summaryData, setSummaryData] = useState<SummaryDataValues[]>([]);
  const [trends, setTrends] = useState<Trend[]>([]);
  const [graphOption, setGraphOption] = useState([graphOptions[0], {}]);

  const getTrendsAverage = (trends: Trend[]) => {
    const average = { imp: 0, click: 0, cost: 0, conv: 0, convValue: 0, roas: 0 };

    trends.forEach(({ imp, click, cost, conv, convValue, roas }) => {
      average.imp += imp;
      average.click += click;
      average.cost += cost;
      average.conv += conv;
      average.convValue += convValue;
      average.roas += roas;
    });

    const { length } = trends;
    average.imp /= length;
    average.click /= length;
    average.cost /= length;
    average.conv /= length;
    average.convValue /= length;
    average.roas /= length;

    return average;
  };

  const parseTrendData = (prev: Trend, cur: Trend) => {
    const parseData = [
      {
        title: 'ROAS',
        content: Math.round(cur.roas) + '%',
        fluctuation: getFluctucation(prev.roas, cur.roas) + '%',
        isIncreased: cur.roas >= prev.roas,
      },
      {
        title: '광고비',
        content: parseString(cur.cost) + ' 원',
        fluctuation: getFluctucation(prev.cost, cur.cost) + ' 원',
        isIncreased: cur.cost >= prev.cost,
      },
      {
        title: '노출수',
        content: parseString(cur.imp) + ' 회',
        fluctuation: getFluctucation(prev.imp, cur.imp) + ' 회',
        isIncreased: cur.imp >= prev.imp,
      },
      {
        title: '클릭수',
        content: parseString(cur.click) + ' 회',
        fluctuation: getFluctucation(prev.click, cur.click) + ' 회',
        isIncreased: cur.click >= prev.click,
      },
      {
        title: '전환수',
        content: parseString(cur.conv) + ' 회',
        fluctuation: getFluctucation(prev.conv, cur.conv) + ' 회',
        isIncreased: cur.conv >= prev.conv,
      },
      {
        title: '매출',
        content: parseString(cur.convValue) + ' 원',
        fluctuation: getFluctucation(prev.convValue, cur.convValue) + ' 원',
        isIncreased: cur.convValue >= prev.convValue,
      },
    ];

    setSummaryData(parseData);
  };

  const getTrend = async (fromDate: Date, toDate: Date) => {
    const period = getPeriod(fromDate, toDate);

    const data = await trendService.get(fromDate, toDate);
    setTrends(data);
    const curTrendsAverage = getTrendsAverage(data);

    const prevData = await trendService.get(addDays(fromDate, -period), addDays(toDate, -period));
    const prevTrendsAverage = getTrendsAverage(prevData);

    parseTrendData(prevTrendsAverage, curTrendsAverage);
  };

  useEffect(() => {
    getTrend(dateRange.fromDate, dateRange.toDate);
  }, [dateRange]);

  const value = useMemo(
    () => ({ trends, summaryData, getTrend, dateRange, setDateRange, graphOption, setGraphOption }),
    [trends, summaryData, dateRange, graphOption]
  );

  return <TrendContext.Provider value={value}>{children}</TrendContext.Provider>;
}
