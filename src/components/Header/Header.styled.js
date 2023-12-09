import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 5px;
@media screen and (min-width: 768px) {
    width: 500px;
    margin: 0 auto;
}
@media screen and (min-width: 1250px) {
    width: 700px;
}
`
export const NavBtn = styled(NavLink)`
color: var(--black);

&.active{
    color: var(--brand);
}
`