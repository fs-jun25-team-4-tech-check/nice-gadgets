import React from 'react';
import styles from './Contacts.module.scss';
import contacts from '../../../assets/data/contacts.json';
import ContactCard from '../../molecules/ContactCard/ContactCard';

const Contacts: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Our team</h1>
      {contacts.map((c) => (
        <ContactCard
          key={c.id}
          person={c}
        />
      ))}
    </section>
  );
};

export default Contacts;
