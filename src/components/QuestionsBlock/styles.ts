import styled from 'styled-components';

const QuestionContainer = styled.div`
  min-height: 400px;
  border: 2px solid #e1f3ff;
  border-radius: 30px;
  padding: 1.5rem;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
`;

const TextQuestion = styled.h4`
  color: #717f88;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
  padding: 15px 10px;
  border-bottom: 1px solid #e1f3ff;
  transition: background-color 0.2s;
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

const CustomCheckbox = styled.span<{
  checked?: boolean;
  type: 'radio' | 'checkbox';
}>`
  width: 18px;
  height: 18px;
  border: 2px solid #717f88;
  border-radius: ${({ type }) => (type === 'radio' ? '50%' : '4px')};
  background: ${({ checked }) => (checked ? '#a1caff' : 'white')};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    left: ${({ type }) => (type === 'radio' ? '6px' : '5px')};
    top: ${({ type }) => (type === 'radio' ? '6px' : '1px')};
    width: ${({ type }) => (type === 'radio' ? '6px' : '5px')};
    height: ${({ type }) => (type === 'radio' ? '6px' : '10px')};
    border-radius: ${({ type }) => (type === 'radio' ? '50%' : '0')};
    border: ${({ type }) => (type === 'radio' ? 'none' : 'solid white')};
    border-width: ${({ type }) => (type === 'radio' ? '0' : '0 2px 2px 0')};
    transform: ${({ type }) => (type === 'radio' ? 'none' : 'rotate(45deg)')};
  }
`;

export {
  QuestionContainer,
  Title,
  TextQuestion,
  CustomCheckbox,
  Label,
  HiddenInput,
};
