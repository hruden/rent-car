import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, HeaderContainer } from "./Layout.styled";
import Header from "../components/Header/Header";

export default function Layout(){
return(
    <Container>
    <HeaderContainer><Header/></HeaderContainer>
    <Suspense
      fallback={
        <div>...Loading</div>
      }
    >
      <Outlet />
    </Suspense>
  </Container>
)
}