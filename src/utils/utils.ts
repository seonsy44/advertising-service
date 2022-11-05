export const parseDate = (startDate: string, endDate: string | null = '') => {
  if (!endDate) return startDate.slice(0, 10);
  return `${startDate.slice(0, 10)} (${endDate.slice(0, 10)})`;
};

export const parseKRW = (cost: number) => `${Math.round(cost / 10000).toLocaleString()} 만원`;
