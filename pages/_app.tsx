import {AppProps} from "next/app";
import MainNavBar from "../components/MainNavBar";

import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
    return(
        <>
            <MainNavBar/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;