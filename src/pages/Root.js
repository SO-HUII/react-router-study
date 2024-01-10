import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";

function RootLayout() {
  return <>
    <MainNavigation />
    <main className={classes.content}>
      {/* 자녀 라우트를 렌더링 해야할 장소를 표시하는 마커 */}
      <Outlet /> 
    </main>
  </>
}

export default RootLayout;