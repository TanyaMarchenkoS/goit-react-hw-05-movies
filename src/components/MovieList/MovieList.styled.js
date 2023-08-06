import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ListItem = styled.li`
  color: #211f1f;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  color: #211f1f;
  transition: background-color 0.3s ease;
  &:hover {
    color: #810103;
  }
`;