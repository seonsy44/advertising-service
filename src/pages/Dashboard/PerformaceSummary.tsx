import styled from 'styled-components';
import { useTrend } from '../../context/TrendContext';
import PerformanceCard from './PerformanceCard';

function PerformanceSummary() {
  const trends = useTrend();

  return (
    <Container>
      {trends?.summaryData.map(({ title, content, fluctuation, isIncreased }) => (
        <PerformanceCard
          key={title}
          title={title}
          content={content}
          fluctuation={fluctuation}
          isIncreased={isIncreased}
        />
      ))}
    </Container>
  );
}

export default PerformanceSummary;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 22px;
`;
