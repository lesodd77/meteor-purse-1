import React from 'react';
import { ContactsCollection } from '../../api/ContactsCollection';

export const ContactForm = () => {

 const [name, setName] = React.useState("")
 const [email, setEmail] = React.useState('')
 const [imageUrl, setImageUrl] = React.useState('')


 const saveContact = () => {
ContactsCollection.insert({ name, email, imageUrl });
setName('');
setEmail('');
setImageUrl('');
}
  return (
    <form className='form'>
    <div>
    <label htmlFor='name'>Name
    </label>
    <input type='text' 
    id='name'
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
    </div>

    <div>
    <label htmlFor='email'>
    Email
    </label>
    <input type='text' 
    id='email'
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
    </div>

    <div>
    <label htmlFor='imageUrl'>
    Image Url
    </label>
    <input type='text' 
    id='imageUrl'
    value={imageUrl}
    onChange={(e) => setImageUrl(e.target.value)}
    />
    </div>
    <div>
    <button type='btn'
     onClick={saveContact}
     >
     Save Contact
     </button>
    </div>
 </form>
  );
}
