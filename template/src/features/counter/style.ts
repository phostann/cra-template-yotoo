import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.primary};
  font-size: 20px;
`;

export const Num = styled.span`
  color: ${(props) => props.theme.secondary};
  margin: 0 10px;
`;
