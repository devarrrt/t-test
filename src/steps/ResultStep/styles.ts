import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 20px;

  @media (max-width: 576px) {
    padding: 0;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  max-width: 1200px;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
const Title = styled.h4`
  font-size: 26px;
`;

const Subtitle = styled.span`
  font-size: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const InfoBox = styled.div`
  text-align: center;
  max-width: 180px;
  padding: 2rem;
  background-color: #f0f4f8;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  @media (max-width: 576px) {
    max-width: 100%;
    width: 100%;
  }
`;

const InfoLabel = styled.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const InfoValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #2a7ae2;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

export {
  Container,
  ContentBox,
  Title,
  Subtitle,
  InfoContainer,
  InfoBox,
  InfoLabel,
  InfoValue,
  ButtonBlock,
};
