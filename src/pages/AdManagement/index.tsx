import styled from 'styled-components';
import Button from '../../components/Button';
import Container from '../../components/Container';
import DropdownSmall from '../../components/DropdownSmall';
import { flexBox } from '../../styles/mixin';
import { adManagementOptions } from '../../utils/conts';
import AdCard from './AdCard';

function AdManagement() {
  return (
    <Container>
      <TopContent>
        <DropdownSmall options={adManagementOptions} />
        <Button>광고 만들기</Button>
      </TopContent>

      <AdsContainer>
        <AdCard
          ad={{
            id: 1,
            adType: 'web',
            title: '매드업 레버 광고 1234',
            budget: 500000,
            status: 'active',
            startDate: '2020-10-19T00:00:00',
            endDate: null,
            report: {
              cost: 267144117,
              convValue: 1157942685,
              roas: 433,
            },
          }}
        />
      </AdsContainer>
    </Container>
  );
}

export default AdManagement;

const TopContent = styled.div`
  width: 100%;
  ${flexBox('row', 'space-between', 'center')};
`;

const AdsContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
`;
