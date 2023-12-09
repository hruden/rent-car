import { NavBtn, NavContainer } from "./Header.styled";
import Logo from '../../assets/images/logo.jpg'

export default function Header() {
  return (
    <NavContainer>
      <NavBtn to="/"><img src={Logo} alt="car" width={50} height={34}/></NavBtn>
      <NavBtn to='/catalog'>Catalog</NavBtn>
      <NavBtn to='/favorites'>Favorite</NavBtn>
    </NavContainer>
  );
}
