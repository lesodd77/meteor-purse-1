import React from 'react';
import  { ContactForm }  from './components/ContactForm.jsx';
import  { ContactList } from './components/ContactList.jsx';
import  { Header } from './components/Header.jsx';

export const App = () => (
  <div>
    <Header />
     <div className='min-h-full'>
      <div className='max-w-4xl mx-auto p-2'> 
       <ContactForm />
     <ContactList />
    
    </div>
   </div>
  </div>
);
