import styled from '@emotion/styled';

export const ProfileCont = styled.div`
  text-align: center;
  background-color: teal;
  width: 500px;
  margin-top: 60px;
  padding-top: 10px;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: light-gray;
  border: 1px solid black;
  width: calc(100% / 3);
  padding: 10px;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;
