import styled, { css, FlattenInterpolation, ThemeProps } from 'styled-components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import useDropdown from '../hooks/useDropdown';
import { DropdownOption } from '../types';
import OptionSmall from './OptionSmall';

type DropdownSmallProps = {
  options: DropdownOption[];
  customStyle?: FlattenInterpolation<ThemeProps<unknown>>;
  onClick?: (option: DropdownOption) => void;
};

function DropdownSmall({ options, customStyle, onClick }: DropdownSmallProps) {
  const { isOpen, selected, handleToggle, handleSelect } = useDropdown(options[0]);

  const handleClick = (option: DropdownOption) => () => {
    if (onClick) onClick(option);

    handleSelect(option);
  };

  return (
    <Container onClick={handleToggle} customStyle={customStyle}>
      <OptionSmall>
        {selected.content}
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </OptionSmall>

      {isOpen && (
        <OptionsContainer>
          {options.map((option) => (
            <OptionSmall
              key={option.id}
              isSelected={option.id === selected.id}
              customStyle={OptionStyle}
              onClick={handleClick(option)}>
              {option.content}
            </OptionSmall>
          ))}
        </OptionsContainer>
      )}
    </Container>
  );
}

export default DropdownSmall;

const Container = styled.div<{ customStyle?: FlattenInterpolation<ThemeProps<unknown>> | undefined }>`
  position: relative;
  width: 123px;
  min-height: 40px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.grey_100};
  z-index: 9;
  ${({ customStyle }) => customStyle};
`;

const OptionsContainer = styled(Container)`
  position: absolute;
  top: 40px;
  left: -1px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.grey_100};
`;

const OptionStyle = css`
  background-color: white;
  border-radius: 0;

  & + div {
    border-top: 1px solid ${({ theme }) => theme.grey_100};
  }
`;
