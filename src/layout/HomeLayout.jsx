import { memo } from "react";
import Footer from "../components/Footer";
import NavbarMenu from "../components/Navbar";
import { Outlet } from "react-router-dom";

function HomeLayout() {
    return (
        <div className="h-screen flex flex-col mb-5">
            <NavbarMenu />
            <div className="flex-1 d-flex flex-column justify-content-center">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default memo(HomeLayout)
