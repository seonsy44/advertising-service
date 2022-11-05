import styled from 'styled-components';
import PerformanceCard from './PerformanceCard';

function PerformanceSummary() {
  return (
    <Container>
      <PerformanceCard title="ROAS" content="697%" fluctuation="18%" isIncreased={false} />
      <PerformanceCard title="ROAS" content="697%" fluctuation="18%" isIncreased={false} />
      <PerformanceCard title="ROAS" content="697%" fluctuation="18%" isIncreased={false} />
      <PerformanceCard title="ROAS" content="697%" fluctuation="18%" isIncreased={false} />
      <PerformanceCard title="ROAS" content="697%" fluctuation="18%" isIncreased={false} />
      <PerformanceCard title="ROAS" content="697%" fluctuation="18%" isIncreased={false} />
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
