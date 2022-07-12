import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class'; 


const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h2>Contacts</h2>
            <h3>Name: { contact.name }</h3>
            <h3>Last Name: { contact.lastName }</h3>
            <h3>E-Mail: { contact.email }</h3>
            <h3>Status: { contact.status ? 'Online':'Offline' }</h3>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
