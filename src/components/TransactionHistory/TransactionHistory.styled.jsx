import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
`;

export const Thead = styled.thead`
  background-color: blue;
  color: white;
  font-family: 'Roboto';
  font-size: 16px;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  :hover {
    background-color: aquamarine;
  }
`;

export const ItemRow = styled(Tr)`
  background-color: ${props => (props.idx % 2 === 0 ? 'green' : 'transparent')};
`;

export const Th = styled.th`
  text-align: left;
  padding-left: 8px;
`;

export const Tbody = styled.tbody`
  background-color: white;
`;

export const Td = styled.td`
  color: black;
`;

export const Type = styled(Td)`
  text-transform: capitalize;
`;
