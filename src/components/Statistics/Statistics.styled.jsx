import styled from 'styled-components';
import { getRandomHexColor } from 'helpers/getRandomHexColor';

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 100%;
  width: 360px;
`;

export const Title = styled.h3`
  text-align: center;
  color: black;
  font-family: 'Roboto';
  font-size: 20px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${props => getRandomHexColor(props.index)};
`;

export const Label = styled.span`
  font-size: 16px;
  color: black;
`;

export const Percentage = styled.span`
  font-size: 16px;
  color: black;
  font-weight: 500;
`;
