import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";

export default function AdminLayout() {

    return (
        <>
            <AppHeader />
            <Outlet />
        </>
    )
}