import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
  gap: 10px;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export { Container };
