import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 251px);
  margin-top:25px;
  gap: 27px;
`;

export const Item = styled.li`
  font-size: 12px;
  transition: transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    box-shadow 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  :hover,
  :focus {
    transform: scale(1.05);
    box-shadow: 3px 7px 5px 0px rgba(0,0,0,0.75);
  }
  overflow: hidden;
  border-radius: 9px;
`;

export const Img = styled.img`
  width: 271px;
  height: 300px;
  object-fit: cover;
`;

export const Title = styled.h2`
  padding: 7px;
  color: #e0228e;
  /* background-color: #e0228e88; */
`;
