import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import { flexBox } from '../../styles/mixin';
import { pageTitles, pathnames } from '../../utils/conts';
import DatePicker from '../DatePicker';
import usePageTitle from '../../hooks/usePageTitle';

const fromDate = new Date(2022, 1, 1);
const toDate = new Date(2022, 3, 20);

function PageTitle() {
  const { pathname } = useLocation();
  const { trends, isOpenDatePicker, handleDateSetClick, handleDateRangeClick } = usePageTitle();

  const parseDate = (date: Date | undefined) => {
    if (date) return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  return (
    <Container>
      {pageTitles[pathname]}

      {pathname === pathnames.dashboard && (
        <DateRange onClick={handleDateRangeClick}>
          <>
            {`${parseDate(trends?.dateRange.fromDate)} ~ ${parseDate(trends?.dateRange.toDate)}`} <FaChevronDown />
          </>
        </DateRange>
      )}
      {isOpenDatePicker && (
        <DatePicker customStyle={DatePickerStyle} fromDate={fromDate} toDate={toDate} onSetClick={handleDateSetClick} />
      )}
    </Container>
  );
}

export default PageTitle;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  ${flexBox('row', 'space-between')};
  font-size: 26px;
  font-weight: 900;
  color: ${({ theme }) => theme.grey_800};
`;

const DateRange = styled.div`
  ${flexBox()};
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.grey_800};
  cursor: pointer;

  > svg {
    margin-left: 10px;
  }
`;

const DatePickerStyle = css`
  position: absolute;
  bottom: -350px;
  right: 0;
`;
