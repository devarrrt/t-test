import styled from 'styled-components';

const MainContainer = styled.div`
  max-width: 1240px;
  padding: 2rem;
  margin: 0 auto;
  white-space: normal;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: ${({ disabled }) => (disabled ? '#999' : '#4b4b4b')};
  border: 2px solid
    ${({ color, disabled }) => (disabled ? '#ccc' : color ?? '#e1f3ff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export { MainContainer, Button };
