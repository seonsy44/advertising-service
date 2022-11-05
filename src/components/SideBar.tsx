import styled from 'styled-components';
import { flexBox } from '../styles/mixin';
import { sidebarOptions } from '../utils/conts';
import DropdownLarge from './DropdownLarge';
import SideBarMenu from './SideBarMenu';

function SideBar() {
  return (
    <Container>
      <Logo>LEVER</Logo>

      <Label>서비스</Label>
      <DropdownLarge options={sidebarOptions} />

      <Label>광고 센터</Label>
      <SideBarMenu />
    </Container>
  );
}

export default SideBar;

const Container = styled.div`
  width: 320px;
  height: 100%;
  padding: 0 40px;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.04);
`;

const Logo = styled.div`
  width: 100%;
  height: 150px;
  border-bottom: 1px solid ${({ theme }) => theme.grey_50};
  ${flexBox('row', 'start')}
  font-size: 40px;
  font-weight: 700;
`;

const Label = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 40px;
  padding: 0 20px;
  ${flexBox('row', 'start')};
  font-size: 12px;
  font-weigth: 700;
  color: ${({ theme }) => theme.grey_300};
`;
