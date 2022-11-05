import styled, { css } from 'styled-components';
import Button from '../../components/Button';
import { flexBox } from '../../styles/mixin';
import { Advertisement } from '../../types';
import { adTypes } from '../../utils/conts';
import { parseDate, parseKRW } from '../../utils/utils';

type AdCardProps = {
  ad: Advertisement;
};

function AdCard({
  ad: {
    adType,
    title,
    status,
    startDate,
    endDate,
    budget,
    report: { roas, cost, convValue },
  },
}: AdCardProps) {
  const contents = [
    { data: '상태', content: status },
    { data: '광고 생성일', content: `${parseDate(startDate, endDate)}` },
    { data: '일 희망 예산', content: parseKRW(budget) },
    { data: '광고 수익률', content: `${roas}%` },
    { data: '매출', content: parseKRW(convValue) },
    { data: '광고 비용', content: parseKRW(cost) },
  ];

  return (
    <Container>
      <Title>
        {adTypes[adType]}_{title}
      </Title>

      <Contents>
        {contents.map(({ data, content }) => (
          <Content>
            <div>{data}</div>
            {content}
          </Content>
        ))}
      </Contents>

      <Button customStyle={ButtonStyle}>수정하기</Button>
    </Container>
  );
}

export default AdCard;

const Container = styled.div`
  width: 305px;
  padding: 40px 20px 20px 20px;
  border: 1px solid ${({ theme }) => theme.grey_100};
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.grey_800};
`;

const Contents = styled.div`
  width: 100%;
  margin-top: 40px;
  border-top: 1px solid ${({ theme }) => theme.grey_50};
  border-bottom: 1px solid ${({ theme }) => theme.grey_50};
`;

const Content = styled.div`
  padding: 13px 0;
  ${flexBox('row', 'flex-start')}
  font-size: 12px;
  font-weight: 700;

  > div {
    width: 63px;
    margin-right: 40px;
    font-weight: 500;
    color: ${({ theme }) => theme.grey_300};
  }

  & + div {
    border-top: 1px solid ${({ theme }) => theme.grey_50};
  }
`;

const ButtonStyle = css`
  margin-top: 20px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grey_100};
  color: ${({ theme }) => theme.grey_800};
`;
