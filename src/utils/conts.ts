import { HiOutlinePresentationChartLine as PT, HiChartBar as Chart } from 'react-icons/hi';
import { DropdownOption } from '../types';

export const pathnames: { [key: string]: string } = {
  dashboard: '/dashboard',
  management: '/admanagement',
};

export const pageTitles: { [key: string]: string } = {
  [pathnames.dashboard]: '대시보드',
  [pathnames.management]: '광고관리',
};

export const sidebarMenu = [
  { Icon: PT, content: '대시보드', path: pathnames.dashboard },
  { Icon: Chart, content: '광고관리', path: pathnames.management },
];

export const sidebarOptions = [
  { id: 1, content: '매드업' },
  { id: 2, content: '서비스 추가하기' },
];

export const graphOptions: DropdownOption[] = [
  { id: 1, content: 'ROAS', option: 'roas' },
  { id: 2, content: '광고비', option: 'cost' },
  { id: 3, content: '노출수', option: 'imp' },
  { id: 4, content: '클릭수', option: 'click' },
  { id: 5, content: '전환수', option: 'conv' },
  { id: 6, content: '매출', option: 'convValue' },
];

export const periodOptions = [
  { id: 1, content: '주간' },
  { id: 2, content: '일별' },
];

export const adManagementOptions = [
  { id: 1, content: '전체 광고', option: 'all' },
  { id: 2, content: '진행중', option: 'active' },
  { id: 3, content: '중단됨', option: 'ended' },
];

export const adTypes: { [key: string]: string } = {
  web: '웹광고',
  app: '앱광고',
};

export const MS_PER_DAY = 86400000;
export const MS_PER_9HOURS = 32400000;
