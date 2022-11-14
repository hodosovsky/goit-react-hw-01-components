import styled from '@emotion/styled';

export const Table = styled.table`
  width: 50%;
  text-align: center;

  & th {
    background-color: lightblue;
  }

  & tr {
    height: 70px;
  }

  & tr:nth-of-type(even) {
    background-color: gainsboro;
  }
`;
