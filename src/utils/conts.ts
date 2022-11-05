import { HiOutlinePresentationChartLine as PT, HiChartBar as Chart } from 'react-icons/hi';

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

export const adManagementOptions = [
  { id: 1, content: '전체 광고' },
  { id: 2, content: '진행중' },
  { id: 3, content: '중단됨' },
];

export const adTypes: { [key: string]: string } = {
  web: '웹광고',
  app: '앱광고',
};
