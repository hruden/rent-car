import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, HeaderContainer } from "./Layout.styled";
import Header from "../components/Header/Header";
import Loader from "components/Loader/Loader";

export default function Layout(){
return(
    <Container>
    <HeaderContainer><Header/></HeaderContainer>
    <Suspense
      fallback={
        <Loader/>
      }
    >
      <Outlet />
    </Suspense>
  </Container>
)
}