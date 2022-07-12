import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../Contact';

const ContactBox = () => {

    const defaultContact = new Contact('Dave', 'Clone', 'bigMouth@gmail.com', false);

    return (
        <div>
            <h1>Welcome to Contacts</h1>
            <div>
                <ContactComponent contact={defaultContact} />
            </div>
        </div>
    );
}

export default ContactBox;