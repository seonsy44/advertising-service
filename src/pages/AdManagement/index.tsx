import styled from 'styled-components';
import Button from '../../components/Button';
import Container from '../../components/Container';
import DropdownSmall from '../../components/DropdownSmall';
import { useAds } from '../../context/AdsContext';
import { flexBox } from '../../styles/mixin';
import { adManagementOptions } from '../../utils/conts';
import AdCard from './AdCard';

function AdManagement() {
  const { ads } = useAds() || {};

  return (
    <Container>
      <TopContent>
        <DropdownSmall options={adManagementOptions} />
        <Button>광고 만들기</Button>
      </TopContent>

      <AdsContainer>
        {ads?.map((ad) => (
          <AdCard key={ad.id} ad={ad} />
        ))}
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
