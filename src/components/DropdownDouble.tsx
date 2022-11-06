import styled, { css, FlattenInterpolation, ThemeProps } from 'styled-components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import useDropdownDouble from '../hooks/useDropdownDouble';
import { DropdownOption } from '../types';
import OptionSmall from './OptionSmall';
import { flexBox } from '../styles/mixin';

type DropdownDoubleProps = {
  options: DropdownOption[];
  customStyle?: FlattenInterpolation<ThemeProps<unknown>>;
  onOpt1Click?: (option: DropdownOption) => void;
  onOpt2Click?: (option: DropdownOption) => void;
};

function DropdownDouble({ options, customStyle, onOpt1Click, onOpt2Click }: DropdownDoubleProps) {
  const { isOpt1Open, isOpt2Open, selected, handleOpt1Toggle, handleOpt2Toggle, handleOpt1Select, handleOpt2Select } =
    useDropdownDouble([options[0], { id: -1, content: '선택안함', option: '' }]);

  const handleOpt1Click = (option: DropdownOption) => () => {
    if (onOpt1Click) onOpt1Click(option);

    handleOpt1Select(option);
  };

  const handleOpt2Click = (option: DropdownOption) => () => {
    if (onOpt2Click) onOpt2Click(option);

    handleOpt2Select(option);
  };

  return (
    <DoubleContainer>
      <Container onClick={handleOpt1Toggle} customStyle={customStyle}>
        <OptionSmall>
          {selected[0]?.content}
          {isOpt1Open ? <FiChevronUp /> : <FiChevronDown />}
        </OptionSmall>

        {isOpt1Open && (
          <OptionsContainer>
            {options.map((option) => (
              <OptionSmall
                key={option.id}
                isSelected={option.id === selected[0]?.id || option.id === selected[1]?.id}
                customStyle={OptionStyle}
                onClick={handleOpt1Click(option)}>
                {option.content}
              </OptionSmall>
            ))}
          </OptionsContainer>
        )}
      </Container>

      <Container onClick={handleOpt2Toggle} customStyle={customStyle}>
        <OptionSmall>
          {selected[1]?.content}
          {isOpt2Open ? <FiChevronUp /> : <FiChevronDown />}
        </OptionSmall>

        {isOpt2Open && (
          <OptionsContainer>
            <OptionSmall
              key={-1}
              isSelected={selected[0]?.id === -1 || selected[1]?.id === -1}
              customStyle={OptionStyle}
              onClick={handleOpt2Click({ id: -1, content: '선택안함', option: '' })}>
              선택안함
            </OptionSmall>
            {options.map((option) => (
              <OptionSmall
                key={option.id}
                isSelected={option.id === selected[0]?.id || option.id === selected[1]?.id}
                customStyle={OptionStyle}
                onClick={handleOpt2Click(option)}>
                {option.content}
              </OptionSmall>
            ))}
          </OptionsContainer>
        )}
      </Container>
    </DoubleContainer>
  );
}

export default DropdownDouble;

const DoubleContainer = styled.div`
  ${flexBox()}
`;

const Container = styled.div<{ customStyle?: FlattenInterpolation<ThemeProps<unknown>> | undefined }>`
  position: relative;
  width: 123px;
  min-height: 40px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.grey_100};
  z-index: 9;
  ${({ customStyle }) => customStyle};

  & + div {
    margin-left: 10px;
  }
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
