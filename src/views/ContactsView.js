
import Filter from '../components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Modal from 'components/Modal/Modal';
import Container from 'components/Container/Container';
import { useState} from 'react';


export default function ContactsView() {
const {isModalOpen, setIsModalOpen}=useState(false);
const toggleModal=()=>setIsModalOpen(state=>!state);

  
  return (
    <Container>
      <h1>Phonebook</h1>
      <Filter />
      <ContactList />
      {isModalOpen && (
          <Modal onClose={toggleModal}>
          <ContactForm  onSave={toggleModal}/>
          <h2>Contacts </h2>
          </Modal>
      )}
    </Container>
  );
}
