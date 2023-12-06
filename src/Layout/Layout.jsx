import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Layout(){
return(
    <div>
    <div>Header</div>
    <Suspense
      fallback={
        <div>...Loading</div>
      }
    >
      <Outlet />
    </Suspense>
  </div>
)
}