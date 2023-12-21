import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

export const Card = styled.div`
  position: relative;
  width: 280px;
  margin: 20px auto 15px;
  scale: 1;
  transition: scale var(--transition);
  box-shadow: 3px 8px 14px 0px #88c6fd30;
  &:hover,
  :focus {
    scale: 1.05;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    margin-top: 20px;
  }
`;

export const FavoriteIconCheck = styled(FaHeart)`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: var(--brand);
`;
export const FavoriteIcon = styled(FaRegHeart)`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: var(--white);
`;
export const ContainerImg = styled.div`
  width: 100%;
  height: 268px;
  overflow: hidden;
  border-radius: 14px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const List = styled.ul`
  padding: 0 5px;
  margin: 14px 0 28px;
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  color: var(--textTitle);
  margin-bottom: 8px;
`;
export const TextContainer = styled.div`
  color: var(--textInfo);
`;
export const Item = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const BtnLearnMore = styled.button`
  padding: 12px;
  width: 100%;
  font-weight: 600;
  border: transparent;
  border-radius: 12px;
  cursor: pointer;
  color: var(--white);
  background-color: var(--brand);
  transition: background-color var(--transition);
  &:hover,
  :focus {
    background-color: var(--accent);
  }
`;
