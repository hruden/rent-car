import styled from 'styled-components';

export const Card = styled.div`
width: 280px;
margin: 20px auto 15px;
scale: 1;
transition: scale var(--transition);
&:hover,:focus{
  scale: 1.05;
}

@media screen and (min-width: 768px) {
  margin: 0;
  margin-top: 20px;
}
`
export const ContainerImg = styled.div`
width: 280px;
height: 210px;
`
export const Img = styled.img`
border-radius: 14px;
border: transparent;
`
export const List = styled.ul`
padding: 0 5px;
margin: 14px 0 28px;
`
export const TitleContainer = styled.div`
display: flex;
justify-content: space-between;
font-weight: 500;
color: var(--textTitle);
margin-bottom: 8px;
`
export const TextContainer = styled.div`
color: var(--textInfo);
`
export const Item = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const BtnLearnMore = styled.button`
padding: 12px;
width: 100%;
border: transparent;
border-radius: 12px;
cursor: pointer;
color: var(--white);
background-color: var(--brand);
transition: background-color var(--transition);
&:hover,:focus{
  background-color: var(--accent);

}
`