import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 0 auto;
  padding: 16px;
  max-width: 100%;
  width: 420px;
`;

export const Status = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-left: 16px;
  color: black;
  font-size: 16px;
  font-weight: 700;
`;
