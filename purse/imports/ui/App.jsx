import React from 'react';

import  { ContactForm }  from './components/ContactForm.jsx';
import  { ContactList } from './components/ContactList.jsx';

export const App = () => (
  <>
    <h1>Purse!</h1>
    <ContactForm />
     <ContactList />
  </>
);
