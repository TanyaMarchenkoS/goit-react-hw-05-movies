import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  border-bottom: 1px solid #6e6e6e;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImgWrap = styled.div`
  margin: 20px;
  max-width: 500px;
`;

export const Image = styled.img`
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

export const DescMovie = styled.div`
  max-width: 600px;
  padding-left: 20px;
  padding-right: 40px;
`;

export const Title = styled.h2``;

export const DescText = styled.p``;

export const DescSubtitle = styled.h3``;