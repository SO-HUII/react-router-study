import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return <>
    <MainNavigation />
    <main>
      {/* 자녀 라우트를 렌더링 해야할 장소를 표시하는 마커 */}
      <Outlet /> 
    </main>
  </>
}

export default RootLayout;