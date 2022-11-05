import { HiOutlinePresentationChartLine as PT, HiChartBar as Chart } from 'react-icons/hi';

export const pathnames: { [key: string]: string } = {
  dashboard: '/dashboard',
  management: '/management',
};

export const sidebarMenu = [
  { Icon: PT, content: '대시보드', path: pathnames.dashboard },
  { Icon: Chart, content: '광고관리', path: pathnames.management },
];

export const sidebarOptions = [
  { id: 1, content: '매드업' },
  { id: 2, content: '서비스 추가하기' },
];
