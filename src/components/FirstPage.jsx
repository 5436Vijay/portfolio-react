import {  Outlet } from "react-router-dom";
import "../styles/page1.css";
import SideBar from './SideBar';

const Page = () => {


  return (
    <div className="main-frame">
      <SideBar />
      <div className="right-frame">
        <Outlet />
      </div>
    </div>
  );
};

export default Page;
