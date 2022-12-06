import React, { useMemo, useState } from 'react';
import { useAds } from '../context/AdsContext';
import { Advertisement } from '../types';
import { parseDate, parseKRW } from '../utils/utils';

function useAdCard(ad: Advertisement) {
  const {
    id,
    adType,
    title,
    status,
    startDate,
    endDate,
    budget,
    report: { roas, cost, convValue },
  } = ad;
  const ads = useAds();
  const [editedAd, setEditedAd] = useState<{ [key: string]: string | number }>({
    status,
    startDate,
    budget,
    roas,
    convValue,
    cost,
  });

  const contents = useMemo(
    () => [
      { data: '상태', content: status === 'active' ? '진행중' : '중단됨', property: 'status' },
      { data: '광고 생성일', content: `${parseDate(startDate, endDate)}`, property: 'startDate' },
      { data: '일 희망 예산', content: parseKRW(budget), property: 'budget' },
      { data: '광고 수익률', content: `${roas}%`, property: 'roas' },
      { data: '매출', content: parseKRW(convValue), property: 'convValue' },
      { data: '광고 비용', content: parseKRW(cost), property: 'cost' },
    ],
    [ad]
  );

  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEdit = () => setIsEditMode((cur) => !cur);

  const handleContentsChange = (property: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedAd({ ...editedAd, [property]: e.target.value });
  };

  const getContents = (property: string) => editedAd[property];

  const handleEditClick = () => {
    ads?.editAd({
      id,
      adType,
      title,
      status: String(editedAd.status),
      startDate: String(editedAd.startDate),
      endDate,
      budget: Number(editedAd.budget),
      report: { roas: Number(editedAd.roas), cost: Number(editedAd.cost), convValue: Number(editedAd.convValue) },
    });
    setIsEditMode(false);
  };

  return { contents, isEditMode, toggleEdit, handleContentsChange, getContents, handleEditClick };
}

export default useAdCard;
