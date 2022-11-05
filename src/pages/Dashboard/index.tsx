import styled from 'styled-components';
import PerformanceSummary from './PerformaceSummary';

function Dashboard() {
  return (
    <>
      <SubTitle>통합 광고 현황</SubTitle>
      <Container>
        <PerformanceSummary />
      </Container>
    </>
  );
}

export default Dashboard;

const Container = styled.div`
  width: 100%;
  height: 654px;
  padding: 40px;
  margin-top: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.bg_w};
`;

const SubTitle = styled.div`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.grey_800};
`;
