import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import { flexBox } from '../../styles/mixin';
import { pageTitles, pathnames } from '../../utils/conts';
import DatePicker from '../DatePicker';

const fromDate = new Date(2022, 1, 1);
const toDate = new Date(2022, 3, 20);

function PageTitle() {
  const { pathname } = useLocation();
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);

  const handleClick = () => setIsOpenDatePicker((cur) => !cur);

  return (
    <Container>
      {pageTitles[pathname]}

      {pathname === pathnames.dashboard && (
        <DateRange onClick={handleClick}>
          2021년 11월 11일 ~ 2021년 11월 16일 <FaChevronDown />
        </DateRange>
      )}
      {isOpenDatePicker && <DatePicker customStyle={DatePickerStyle} fromDate={fromDate} toDate={toDate} />}
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
  bottom: -320px;
  right: 0;
`;
