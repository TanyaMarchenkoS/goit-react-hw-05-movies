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
  // background-image: url('https://images.unsplash.com/photo-1542204165-19b33620e2c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG1vdmllfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60');
  // background-position: center;
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