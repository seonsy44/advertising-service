import styled from 'styled-components';
import { flexBox } from '../../styles/mixin';

type PerformanceCardProps = {
  title: string;
  content: string;
  fluctuation: string;
  isIncreased: boolean;
};

function PerformanceCard({ title, content, fluctuation, isIncreased }: PerformanceCardProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Fluctuation isIncreased={isIncreased}>
        {isIncreased && <span>▲</span>}
        {!isIncreased && <span>▼</span>}
        {fluctuation}
      </Fluctuation>
    </Container>
  );
}
export default PerformanceCard;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  padding: 18px 40px;
  ${flexBox('column', 'space-between', 'flex-start')}
  border: 0.5px solid ${({ theme }) => theme.grey_50};
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.grey_300};
`;

const Content = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.grey_800};
`;

const Fluctuation = styled(Title)<{ isIncreased: boolean }>`
  position: absolute;
  bottom: 18px;
  right: 40px;

  > span {
    margin-right: 3px;
    color: ${({ isIncreased, theme }) => (isIncreased ? theme.secondary_02 : theme.graph_02)};
  }
`;
