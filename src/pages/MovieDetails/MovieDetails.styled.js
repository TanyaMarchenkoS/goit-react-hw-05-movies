import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const StyledLinkBtn = styled(Link)`
  margin-left: 15px;
  padding: 6px 10px;
  border: 1px solid #808080;
  border-radius: 5px;
  color: #000000;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
    background-color: #810103;
  }
`;

export const AddInfo = styled.div`
  padding-left: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
`;