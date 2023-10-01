import {createBrowserRouter} from "react-router-dom";
import HomePage from "src/pages/home/HomePage";
import Contacts from "src/pages/contacts/Contacts";

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
        path: '*',
        element: <h1>Not found</h1>
    },
], {basename: '/wordpress'});

export default router;

