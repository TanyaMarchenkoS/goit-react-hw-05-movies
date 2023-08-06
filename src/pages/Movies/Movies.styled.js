import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  padding-left: 40px;
`;

export const SearchForm = styled.form``;

export const SearchInput = styled.input`
  width: 300px;
  border: 1px solid #6f6a69;
  border-radius: 3px;
  padding: 6px;
  font-size: 16px;
`;

export const SearchBtn = styled.button`
  padding: 6px 10px;
  border: 1px solid #6f6a69;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
    background-color: #810103;
  }
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
`;