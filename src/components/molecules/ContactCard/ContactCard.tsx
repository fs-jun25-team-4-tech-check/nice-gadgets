import React from 'react';
import styles from './ContactCard.module.scss';
import type { Contact } from '../../../types/Contact';

interface ContactCardProps {
  person: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ person }) => {
  return (
    <article
      className={styles.card}
      aria-label={`Contact card for ${person.firstName} ${person.lastName}`}
    >
      <img
        src={person.photo}
        alt={`${person.firstName} ${person.lastName}`}
        className={styles.photo}
      />

      <div className={styles.info}>
        <h3 className={styles.name}>
          {person.firstName} {person.lastName}
        </h3>

        <p className={styles.line}>
          <strong>GitHub:</strong>{' '}
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {person.githubUsername || person.github}
          </a>
        </p>
        <p className={styles.line}>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${person.email}`}>{person.email}</a>
        </p>

        <p className={styles.about}>{person.about}</p>
      </div>
    </article>
  );
};

export default ContactCard;
