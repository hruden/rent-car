import styled from 'styled-components';

export const Container = styled.div`
  width: 290px;
  padding: 15px 5px;
  color: var(--textTitle);
  @media screen and (min-width: 768px) {
    width: 541px;
    padding: 40px;
  }
`;
export const ContainerImg = styled.div`
  width: 100%;
  height: 248px;
  overflow: hidden;
  border-radius: 14px;
  margin-bottom: 14px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media screen and (min-width: 768px) {
    width: 461px;
    height: 248px;
  }
`;
export const ListContainer = styled.ul`
  margin-bottom: 24px;
`;
export const Title = styled.li`
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 18px;
`;
export const BlueText = styled.span`
  color: var(--brand);
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
  color: var(--textInfo);
`;
export const TitleContainerText = styled.p`
  font-size: 14px;
  margin-top: 14px;
`;
export const TitleAccessories = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;
export const RentConditions = styled.div`
  display: flex;
  gap: 8px;
  font-size: 12px;
  color: var(--rental);
`;
export const RentItem = styled.li`
  padding: 7px 14px;
  border: transparent;
  border-radius: 35px;
  background-color: var(--rentalBtn);
  margin-bottom: 8px;
`;
export const CallUs = styled.a`
  cursor: pointer;
  padding: 12px 50px;
  border: transparent;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  color: var(--white);
  background-color: var(--brand);
  transition: background-color var(--transition);
  &:hover,
  :focus {
    background-color: var(--accent);
  }
`;
