import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin: 0 auto;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  color: black;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`;

export const Tag = styled.p`
  color: grey;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
`;

export const Location = styled.p`
  color: grey;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
`;

export const StatsInfo = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 0 10px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 4px;
`;

export const Label = styled.span`
  color: grey;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
`;

export const Quantity = styled.span`
  color: grey;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
`;
