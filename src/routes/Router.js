import {createBrowserRouter} from "react-router-dom";
import HomePage from "src/pages/home/HomePage";
import Contacts from "src/pages/contacts/Contacts";
import OrderPage from "src/pages/order/OrderPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/contacts',
        element: <Contacts/>
    },
    {
        path: '/order',
        element: <OrderPage/>
    },
    {
        path: '*',
        element: <h1>Not found</h1>
    },
], {basename: '/wordpress'});

export default router;

