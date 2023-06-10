import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const LinkStyle = styled(Link)`
  display: inline-block;
  margin-bottom: 32px;
  padding: 8px;

  font-weight: 700;

  background-color: #e0228e;
  color: white;

  border-radius: 4px;

  transition: background-color 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    color 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  :hover,
  :focus {
    background-color: #dd72af;
    color: #ffffff;
    box-shadow: 3px 7px 5px 0px rgba(0,0,0,0.75);
  }
`;

export const Detail = styled.p`
  margin-top: 28px;
  margin-bottom: 14px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
`;

export const LinkList = styled.ul`
  display: flex;
  align-items: baseline;
  gap: 13px;
  margin-bottom: 15px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  color: #ffffff;

  transition: transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  :hover,
  :focus {
    transform: scale(1.04);
  }

  &.active {
    color: #e0228e;
    font-size: 24px;
  }
`;