import { NavLink } from "react-router-dom";
import { NavContainer } from "./Header.styled";

export default function Header() {
  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to='/catalog'>Catalog</NavLink>
      <NavLink to='/favorites'>Favorite</NavLink>
    </NavContainer>
  );
}
