import {StrictMode} from "react";

const { createRoot } = wp.element;
import Page from "src/page";
import '@assets/styles/global.css';


const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Page />
    </StrictMode>
);