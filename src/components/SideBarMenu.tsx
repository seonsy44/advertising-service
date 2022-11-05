import { useLocation, useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import OptionLarge from './OptionLarge';
import { flexBox } from '../styles/mixin';
import { sidebarMenu } from '../utils/conts';

function SideBarMenu() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = (path: string) => () => navigate(path);

  return (
    <>
      {sidebarMenu.map(({ Icon, content, path }) => (
        <OptionLarge key={content} isSelected={pathname === path} onClick={handleClick(path)} customStyle={OptionStyle}>
          <Icon /> <span>{content}</span>
        </OptionLarge>
      ))}
    </>
  );
}

export default SideBarMenu;

const OptionStyle = css`
  ${flexBox('row', 'start')}

  >span {
    margin-left: 10px;
  }
`;
