import React from 'react';
import {ClassicContainer} from "@widgets/api";
import Introduction from "./introduction/Introduction";
import ContactsWindow from "./contactsWindow/ContactsWindow";
import Areas from "./areas/Areas";

const Contacts = () => {
    return (
        <main className={'relative'}>
            <ClassicContainer xl={'1536px'} lg={'1400px'}>
                <Introduction/>
                <ContactsWindow/>
            </ClassicContainer>
            <Areas/>
        </main>
    );
};

export default Contacts;