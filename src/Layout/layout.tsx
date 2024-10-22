import Header from "./Header";
import { Outlet} from "react-router-dom";
import Footer from "./Footer";
// import TopHeader from "./topheader";

export default function Layout(){

    return(
        <>
            {/* <TopHeader /> */}
            <Header />
                <main>
                    <Outlet />
                </main>
            <Footer />
        </>
    )
}