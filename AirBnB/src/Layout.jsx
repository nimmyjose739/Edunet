import { Outlet } from "react-router-dom";
import "./Header"
import Header from "./Header";
import FooterP from "./FooterP";
export default function Layout(){
    return(
       <div>
         <Header/>
         <Outlet/>
       </div>
    );
}