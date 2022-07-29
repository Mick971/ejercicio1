import React from 'react';
import PropTypes from 'prop-types';
import { componentA } from '../../models/componentA.class';


const Contact = ({ contact }) => {
    return (
        <div>
        
            <b>Name:</b> {contact.name}<br/>
            <b>Last Name:</b> {contact.lastName}<br/>
            <b>Email:</b> {contact.email}<br/>
            <b>Connection State:</b> {contact.conected ? 'Conectado': 'Desconectado'}<br/>
            
            

        </div>
    );
};


Contact.propTypes = {
    contact: PropTypes.instanceOf(componentA)
};


export default Contact;

