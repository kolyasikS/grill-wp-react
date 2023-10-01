import Introduction from "src/pages/home/introduction/Introduction";
import HomePage from "src/pages/home/HomePage";
import {Footer, Header} from "@widgets/api";
import router from "src/routes/Router";
import {RouterProvider} from "react-router-dom";

const Page = () => {
    return (
        <>
            <Header/>
            <RouterProvider router={router}>
            </RouterProvider>
            <Footer/>
        </>
    );
};

export default Page;