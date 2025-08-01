import styled from 'styled-components';

const Container = styled.div`
  padding: 4px;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
`;

const Bar = styled.div`
  height: 32px;
  background-color: #e0e0e0;
  border: 1px solid #ccc;
  overflow: hidden;
  position: relative;
`;

const Fill = styled.div`
  height: 100%;
  background: #72c48b;
  background-size: 40px 40px;
`;
export { Container, Bar, Fill };
