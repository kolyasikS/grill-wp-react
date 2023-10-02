import React from 'react';
import {ClassicContainer} from "@widgets/api";
import Introduction from "./introduction/Introduction";
import ContactsWindow from "./contactsWindow/ContactsWindow";
import Areas from "./areas/Areas";

const Contacts = () => {
    return (
        <main className={'relative bg-[#0F1235] z-0'}>
            <ClassicContainer xl={'1536px'} lg={'1400px'} mobileScreenWidth={'100%'}>
                <Introduction/>
                <ContactsWindow/>
            </ClassicContainer>
            <Areas/>
        </main>
    );
};

export default Contacts;