import styled, { css } from 'styled-components';
import Button from '../../components/Button';
import useAdCard from '../../hooks/useAdCard';
import { flexBox } from '../../styles/mixin';
import { Advertisement } from '../../types';
import { adTypes } from '../../utils/conts';

type AdCardProps = {
  ad: Advertisement;
};

function AdCard({ ad }: AdCardProps) {
  const { contents, isEditMode, toggleEdit } = useAdCard(ad);

  return (
    <Container isEditMode={isEditMode}>
      <Title>
        {adTypes[ad.adType]}_{ad.title}
      </Title>

      <Contents>
        {contents.map(({ data, content }) => (
          <Content key={data}>
            <div>{data}</div>
            {isEditMode && <Input value={content} />}
            {!isEditMode && <div>{content}</div>}
          </Content>
        ))}
      </Contents>

      <Button customStyle={ButtonStyle} onClick={toggleEdit}>
        수정하기
      </Button>
    </Container>
  );
}

export default AdCard;

const Container = styled.div<{ isEditMode: boolean }>`
  width: 100%;
  padding: 40px 20px 20px 20px;
  border: 1px solid ${({ theme, isEditMode }) => (isEditMode ? theme.primary : theme.grey_100)};
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
  height: 40px;
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

const Input = styled.input`
  width: 160px;
  height: 100%;
  font-size: 12px;
  color: ${({ theme }) => theme.grey_300};

  &:focus {
    outline: none;
  }
`;
