import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, HeaderContainer } from "./Layout.styled";

export default function Layout(){
return(
    <Container>
    <HeaderContainer>Header</HeaderContainer>
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