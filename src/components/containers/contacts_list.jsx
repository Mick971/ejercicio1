import React from 'react';
import { componentA } from '../../models/componentA.class';
import Contact from '../pures/contact';





const ContactsList = () => {
    const firstContact = new componentA('Nilson','Romero', 'nilsonromero45@gmail.com',false);
    return (
        
        <div>
             <Contact  contact={firstContact}> </Contact>
             
        </div>
    );
};





export default ContactsList;
