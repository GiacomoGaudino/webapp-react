import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import Loader from "../components/Loader";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function DefaultLayout() {

    const { loading } = useContext(GlobalContext);

    return (
        <>
            <AppHeader />
            <main>
                {loading && <Loader />}
                <Outlet />
            </main>
            <AppFooter />
        </>
    )
}