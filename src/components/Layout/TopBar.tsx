import styled from 'styled-components';
import { HiOutlineBell, HiOutlineCog, HiOutlineUser } from 'react-icons/hi';
import { flexBox } from '../../styles/mixin';

function TopBar() {
  return (
    <Container>
      <IconContainer>
        <HiOutlineBell />
      </IconContainer>

      <IconContainer>
        <HiOutlineCog />
      </IconContainer>

      <UserIconContainer>
        <HiOutlineUser />
      </UserIconContainer>

      <UserName>원티드님</UserName>
    </Container>
  );
}

export default TopBar;

const Container = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.grey_50};
  ${flexBox('row', 'flex-end')}
`;

const IconContainer = styled.div`
  ${flexBox()}
  font-size: 26px;
  color: ${({ theme }) => theme.grey_800};

  & + div {
    margin-left: 30px;
  }
`;

const UserIconContainer = styled(IconContainer)`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.grey_50};
  border: 1px solid ${({ theme }) => theme.grey_100};
  border-radius: 50%;
  color: ${({ theme }) => theme.grey_300};
`;

const UserName = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.grey_800};
`;
