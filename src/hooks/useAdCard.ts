import { useState } from 'react';
import { Advertisement } from '../types';
import { parseDate, parseKRW } from '../utils/utils';

function useAdCard(ad: Advertisement) {
  const {
    adType,
    title,
    status,
    startDate,
    endDate,
    budget,
    report: { roas, cost, convValue },
  } = ad;

  const contents = [
    { data: '상태', content: status },
    { data: '광고 생성일', content: `${parseDate(startDate, endDate)}` },
    { data: '일 희망 예산', content: parseKRW(budget) },
    { data: '광고 수익률', content: `${roas}%` },
    { data: '매출', content: parseKRW(convValue) },
    { data: '광고 비용', content: parseKRW(cost) },
  ];

  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEdit = () => setIsEditMode((cur) => !cur);

  return { contents, isEditMode, toggleEdit };
}

export default useAdCard;
