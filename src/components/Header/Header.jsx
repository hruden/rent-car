import { NavBtn, NavContainer } from "./Header.styled";

export default function Header() {
  return (
    <NavContainer>
      <NavBtn to="/">Home</NavBtn>
      <NavBtn to='/catalog'>Catalog</NavBtn>
      <NavBtn to='/favorites'>Favorite</NavBtn>
    </NavContainer>
  );
}
