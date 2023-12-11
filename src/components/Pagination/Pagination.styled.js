import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
cursor: pointer;
margin: 50px 100px 50px;
border: none;
background-color: transparent;
font-size: 16px;
font-weight: 500;
color: var(--brand);
transition: color var(--transition);
&:hover,:focus{
    color: var(--accent);
    text-decoration: underline;
}
@media screen and (min-width: 768px) {
    margin: 100px 260px 150px;
}
@media screen and (min-width: 1250px) {
    margin: 50px 570px;
}
`