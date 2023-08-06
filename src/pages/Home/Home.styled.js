import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  padding-left: 20px;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.3;
  z-index: -1;
  filter: blur(1px);
`;

export const Title = styled.h2`
  font-size: 30px;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
`;