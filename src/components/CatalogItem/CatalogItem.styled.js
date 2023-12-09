import styled from 'styled-components';

export const Card = styled.div`
width: 280px;
margin: 20px auto 15px;
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
color: var(--white);
background-color: var(--brand);
`