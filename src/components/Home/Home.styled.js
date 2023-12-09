import styled from 'styled-components';
import BackgroundImg from '../../assets/images/image-car.jpg';
import { NavLink } from 'react-router-dom';

export const BackImg = styled.div`
position: relative;
display: block;
justify-content: center;
align-items: center;
width: 100%;
height: 230px;
background-repeat: no-repeat;
background-image: url(${BackgroundImg});
background-size: contain;
@media screen and (min-width: 1250px) {
    height: 460px;
}
`
export const BtnLink = styled(NavLink)`
position: absolute;
top: 20%;
left: 50%;
transform: translate(-50%, -50%);
padding: 5px;
font-weight: 400;
background-color: var(--brand);
border: transparent;
border-radius: 12px;
color: var(--white);
transition: background-color var(--transition);
&:hover,:focus{
    background-color: var(--accent);
}
@media screen and (min-width: 768px) {
    font-weight: 500;
    top: 40%;
    padding: 10px;
}
@media screen and (min-width: 1250px) {
    font-weight: 600;
    padding: 15px;
}
`