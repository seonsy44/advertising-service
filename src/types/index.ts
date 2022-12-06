export type DropdownOption =
  | {
      id: number;
      content: string;
      option?: string;
    }
  | { id: -1; content: '선택안함'; option: '' };

export type Advertisement = {
  id: number;
  adType: string;
  title: string;
  budget: number;
  status: string;
  startDate: string;
  endDate: string | null;
  report: {
    cost: number;
    convValue: number;
    roas: number;
    [key: string]: string | number;
  };
  [key: string]:
    | string
    | number
    | null
    | {
        cost: number;
        convValue: number;
        roas: number;
        [key: string]: string | number;
      };
};

export type Trend = {
  imp: number;
  click: number;
  cost: number;
  conv: number;
  convValue: number;
  ctr?: number;
  cvr?: number;
  cpc?: number;
  cpa?: number;
  roas: number;
  date?: string;
  [key: string]: any;
};
