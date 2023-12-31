import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  padding: 0 15px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 660px;
    padding: 0 30px;
  }
  @media screen and (min-width: 1250px) {
    width: 1250px;
    padding: 0 15px;
  }
`;
export const HeaderContainer = styled.div`
border-bottom: 1px solid var(--brand);
`
