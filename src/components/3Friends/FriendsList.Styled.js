import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  & + & {
    margin-top: 10px;
  }
`;

export const UserStatusOn = styled.span`
  display: block;
  background-color: green;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const UserStatusOff = styled.span`
  display: block;
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
